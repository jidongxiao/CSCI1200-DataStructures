# Overview

Welcome to CSCI 1200 Data Structures lab!  Please listen carefully
when your graduate lab TA and undergraduate programming mentors
introduce themselves at the start of class.  They are here to answer
any questions about the course materials and work with you one-on-one
to master strong programming and debugging skills.  Also, introduce
yourself to the other students in your lab section.  You may ask your
fellow students questions about the lab.  This will help reduce the
burden on the TAs and will reduce your waiting time in lab. {\bf
Note: Each student must produce his/her own exercise solutions.}

There will be three graded ``checkpoints'' associated with each lab.
If you have a question or when you have completed each checkpoint,
raise your hand or put your name in the appropriate queue and your
graduate TA or one of the programming mentors will check your work.
Part of earning each checkpoint for the lab will involve answering
short questions about the material.  If you have done the checkpoint
and understood it, you should have no trouble earning this credit.  If
you have relied on help from other students too much, you may find the
questions hard to answer.

{\bf Do not wait until the end of lab to be checked off for multiple
checkpoints.}  If there is a queue the TA/mentor will only check you
off for one checkpoint at a time and ask you to add your name to the
end of the queue for the next checkpoint.  Class ends 10 minutes
before the hour and no checkpoints may be earned after this time.

{\em IMPORTANT NOTE: No phones, no email, no texting, no social media,
  no web surfing, no game-playing, no distraction!  With the exception
  of downloading lab files provided by the instructor at the start of
  lab, and occasional use of online C++ reference material (e.g., to
  look up the the details of a particular built-in function or class),
  you are not allowed to use the internet during lab.  Disable your
  wireless connection if necessary to remove the temptation.  Anyone
  caught using their cell phones, the internet, or programs not
  directly relevant to this course will be given an immediate 0 for
  that lab and asked to leave.  }

## Learning Objectives

- Learning how network file systems (NFS) work.
- Understanding the concept of remote procedure calls (RPC) and how they can be implemented.
- Being able to explain why endianess conversion is needed when writing network programs.

## Important Notes

You MUST build against the kernel version (3.10.0-1160.el7.x86_64), which is the default version of the kernel installed on the cs452 VM.

## Book References

You are recommended to read these two book chapters:

[Distributed Systems](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-intro.pdf). This chapter explains what Remote Procedure Calls are and what eXternal Data Representation (XDR) is, both concepts are the foundation of this assignment.

[Network File System](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-nfs.pdf). This chapter explains what are the commonly used RPC calls in the NFS protocol.

If you are interested in NFS and its implementation in general, or want to understand various details of the starter code, the book "NFS Illustrated" written by Brent Callaghan is what you are recommended to read.

## Background

### NFS Architecture

NFS is a networking protocol for distributed file sharing. NFS follows the client-server model of computing, and it allows clients to access shared file systems which are implemented and stored on the server.  NFS is implemented as a set of RPC calls in which the server services certain types of calls made by the client. A RPC call is a message sent to a server with the expectation of a reply message. In other words, there are two types of message in RPC: a call message (also known as a **call request**, or a **request message**), goes from the client to the server, and a reply message, goes from the server to the client. The call message identifies a server program and invokes a procedure within the program. Encoded along with the call message are the parameters (also known as arguments) for the procedure. The reply message may be either an error code, or reply data.

For instance, when an NFS client needs to read a file, it sends an RPC call to the server's NFS program to invoke the READ procedure and provides three arguments: the file handle that identifies the file, an offset into the file, and the number of bytes that are to be read. The reply message contains the requested data from the file. Another example is, if the NFS client wants to remove a file, it sends another RPC call to the server's NFS program to invoke the REMOVE procedure and provides two arguments: the file handle that identifies the directory (from which the file is to be removed), and the name of the file to be removed. The text book chapter has the following figure which shows commonly used RPC calls in NFS, including arguments to each call and expected data in the reply message.

![alt text](rpc.png "Supported RPC Calls")

This next figure shows the NFS architecture. In short, the NFS server program generally waits for a call message, decodes the arguments from the message, dispatches them to the appropriate procedure, encodes the reply, and waits for another call message.

![alt text](architecture.jpg "NFS Architecture")

### File Handle vs Inode

As we have learned before, in a typical file system, we use inodes to represent files and directories: each inode is representing either a file, or a directory. Within the file system, each file or directory has a unique inode number. Coming into the network file system situation, using an inode number is not enough for the nfs client to tell the nfs server which file the client is referring to. The following example shows why: Let's say the nfs server has two different file systems, installed on /dev/sda1 and /dev/sda2. And the nfs server mounts these two file systems like this:

```console
# sudo mount /dev/sda1 /opt/test1
# sudo mount /dev/sda2 /opt/test1/test2
```

And both of these two directories are exported to the nfs client:

```console
/opt/test1  *(rw,sync,no_root_squash)
/opt/test1/test2  *(nohide,rw,sync,no_root_squash)
```

Now if the nfs client mounts the first file system like this:

```console
# sudo mount -t nfs nfs_server:/opt/test1  /tmp/mnt
```

Interestingly, this one single command actually mounts the two file systems on the client side. And then if the client is accessing a file inside /tmp/mnt/test2, and passing an inode number (which is associated to this file) to the server, how does the server know which file system the client is actually accessing? It is possible that an inode number, such as 10, is used by the first file system to represent the file /opt/test1/A, but is also used by the second file system to represent the file /opt/test1/test2/B. Therefore, if the server receives inode number 10, it will get confused: does the client want to access file A, or file B?

Because of the above reason, in network file systems, we introduce a new structure, called **file handles**. The Linux kernel defines *struct knfsd_fh* in *include/uapi/linux/nfsd/nfsfh.h* for this purpose.

```c
// fh_size indicates the actual size of this file handle, whereas fh_base indicates the actual content of this file handle.
struct knfsd_fh {
        unsigned int    fh_size;        /* significant for NFSv3.
                                         * Points to the current size while building
                                         * a new file handle
                                         */
        union {
                struct nfs_fhbase_old   fh_old; // This is the old "dentry style" Linux NFSv2 file handle.
                __u32                   fh_pad[NFS4_FHSIZE/4];
                struct nfs_fhbase_new   fh_new; // This is the new flexible, extensible style NFSv2/v3 file handle.
        } fh_base;
};
```

Each file handle represents a file or a directory.

Another structure called *struct svc_fh* is also defined in the starter code.

```c
typedef struct svc_fh {
        struct knfsd_fh         fh_handle;      /* FH data */
        int                     fh_maxsize;     /* max size for fh_handle */
        struct dentry *         fh_dentry;      /* validated dentry */
        struct svc_export *     fh_export;      /* export pointer */

        bool                    fh_want_write;  /* remount protection taken */
} svc_fh;
```

Both structures are used to describe file handles, and they will both be used in this program.

### Big Endian vs Little Endian

The TCP/IP standard network byte order is big-endian; x86 processors are little-endian. Therefore, when receiving bytes from the network, we need to convert them into the machine's order; and before sending bytes out, we need to convert them to the network order. In this assignment, we use *ntohl*() to convert network bytes into machine bytes, and use *htonl*() to convert machine bytes to network bytes. Here *ntohl* is short for "network to host long", and *htonl* is short for "host to network long". You will see these two functions in the next section of this README.

### eXternal Data Representation (XDR)

External data representation (XDR) is a standard for the description and encoding of data. Network protocols like the NFS use XDR to describe their data formats. In XDR, the representation of all data items requires a multiple of 4 bytes (or 32 bits) of data. The bytes are numbered 0 through n -1. The bytes are read or written to some byte stream such that byte m always precedes byte m+1. The n bytes are followed by enough (0 to 3) residual zero bytes (known as padding bytes), r, to make the total byte count a multiple of four. The following figure illustrates such a representation.

![alt text](xdr1.png "Data Represenation in XDR")

In addition, when sending a data item where the number of bytes is not known to the recipient, XDR typically requires the sender to have a prepended integer containing the byte count. The byte count itself occupies 4 bytes, and it does not include any padding bytes. A data item with this byte count is shown below.

![alt text](xdr2.png "Data Represenation in XDR, with byte count")

## Specification

### Starter Code

The starter code looks like this:

```console
[cs452@xyno cs452-network-file-system]$ ls
bmw_main.c  export.c  export.h  Makefile  netns.h  nfsd.h  nfsfh.c  nfsfh.h  nfssvc.c  proc.c  README.md  rfc1813.txt  vfs.c  vfs.h  xdr.c  xdr.h
```

You will be completing xdr.c, and you should not modify any other files.

The starter code already provides you with the code for a kernel module called **bmw**. To install the module, run *make* and then *sudo insmod bmw.ko*; to remove it, run *sudo rmmod bmw*. Yes, in *rmmod*, whether or not you specify *.ko* does not matter; but in *insmod*, you must have that *.ko*.

What this module does is: It starts a kernel thread, which calls the function *nfsd*(), which runs an infinite *for* loop. Inside this *for* loop, it waits for **call requests** (which are sent by clients), and when a request message is received, *nfsd*() calls *svc_process*() to process this request. Each request is represented by a *struct svc_rqst*. *svc_process*() will call the *vs_dispatch()* call back function, which is *nfsd_dispatch*(), and this function will call 3 call back functions: 1. *pc_decode()*, 2. *pc_func()*, 3. *pc_encode()*. Here, *pc_func*() is the RPC call the client wants to invoke. The client, in its request message, encodes information about this RPC call, which tells the server which RPC call the client wants to invoke, and arguments to this call. Because the information is encoded in the request message, the server needs to decode the request message first. Take the REMOVE RPC call for example, when the client wants to delete a file, it sends this call to the server. This call comes with two arguments: a file handle representing the (parent) directory from which the (child) file is to be deleted, and the name of the file to be deleted. To obtain these two arguments, the server invokes its *pc_decode()* call back function. After calling its *pc_decode()* function, the server now has these two arguments, and the server will then call the *pc_func()* call back function, which in this REMOVE RPC call example, will be the remove function provided by the server's local file system, and this function will remove the file from the parent directory. Once this REMOVE RPC call is finished, the server needs to inform the client about the result of this call - success or failure? Such results should be encoded in a **reply message**, which will be sent from the server to the client. To this purpose, the server calls its *pc_encode*() call back function.

### Functions You Need to Implement

Here are the prototypes of the functions that you need to implement in xdr.c:

```c
static __be32 * decode_file_handle(__be32 *p, struct svc_fh *fhp);
static __be32 * decode_file_name(__be32 *p, char **namp, unsigned int *lenp);
static __be32 * encode_fattr3(struct svc_rqst *rqstp, __be32 *p, struct svc_fh *fhp, struct kstat *stat);
```

*decode_file_handle*() and *decode_file_name*() are used in the *pc_decode*() call back function; whereas *encode_fattr3*() are used in the *pc_encode*() call back function. Still, let's take the REMOVE RPC call as an example, when a client wants to delete a file, it sends a REMOVE RPC call request to the server.  The request message comes as a stream of data, which complies with the XDR format. And this stream of data is represented by *p*, which is the first parameter of both *decode_file_handle()* and *decode_file_name()*. The server will call this *decode_file_handle*() to decode the request message and obtain the file handle representing the (parent) directory from which the (child) file is to be deleted, and will then call *decode_file_name*() to decode the request message and obtain the name of the file to be deleted.

1. When *decode_file_handle()* is called, the memory space for a *struct svc_fh* is already allocated, and it is pointed to by *fhp*, which is the second parameter of *decode_file_handle*(). As to *p*, it is pointing to the beginning location of the file handle. When implementing *decode_file_handle*(), your job is to store the decoded file handle in *fhp->fh_handle.fh_base*, and then update *p*, so that *p* will be pointing to a location (in the data stream) right past the file handle, which is actually the beginning location of the file name.

2. When *decode_file_name*() is called, the memory space for the file name is already allocated, and it is pointed to by *name*, which is the second parameter of *decode_file_name*(), and the memory space for the length of this file name is also allocated, and it is pointed to by *lenp*, which is the third parameter of *decode_file_name*(). And *p* is pointing to the beginning location of the file name, in the data stream.

3. According to the NFS protocol, when a REMOVE RPC call is finished, the server should send a reply message to the client, and this reply message should include the file attributes of the parent directory. All the attributes are included in a *fattr3* structure, which is defined as following:

```c
struct fattr3 {
         ftype3     type;	/* the file type: a regular file or a directory? */
         uint32     mode;	/* file permission bits */
         uint32     nlink;	/* number of links */
         uint32     uid;	/* file ower's user id */
         uint32     gid;	/* file owner's group id */
         uint64     size;	/* file size in bytes */
         uint64     used;	/* disk space the file actually uses */
         specdata3  rdev;	/* file device information */
         uint64     fsid;	/* file system id * /
         uint64     fileid;	/* file number within file system, i.e., the inode number */
         nfstime3   atime;	/* last access time */
         nfstime3   mtime;	/* last modify time */
         nfstime3   ctime;	/* last attribute change time */
      };
```

Similar to the request message, the reply message also goes as a stream of data. When *encode_fattr3*() is called, *p* is pointing to this stream, and the goal of *encode_fattr3*() is to encode the above fattr3 structure into the memory location which is pointed to by *p*. When implementing *encode_fattr3*(), you can obtain the value of each field of this *fattr3* structure from *fhp* and *stat*, which is the third and the fourth parameter of *encode_fattr3*().

### Implementing decode_file_handle()

```c
static __be32 * decode_file_handle(__be32 *p, struct svc_fh *fhp);
```

The file handle is a variable-length object, and according to the XDR standard, a variable-length object usually has a prepended integer containing the byte count, which tells us the size of this object, which in this case, is the file handle. The byte count itself consumes 4 bytes. Also, according to the XDR standard, any data item that is not a multiple of 4 bytes in lengths must be padded with zero bytes. With these padding bytes, the whole object will now contain an integral number of 4-byte units. With such knowledge, now you can follow these steps to implement *decode_file_handle*():

1. call *memset()* to set *fhp* to 0.
2. set fhp->fh_maxsize to 64 bytes, as that's the maximum size of our file handles.
3. read 4 bytes from p, and that will be the size of this file handle. 
4. save the size in fhp->fh_handle.fh_size (use *ntohl*() here) and  increment p by 4 bytes because these 4 bytes are just read.
5. keep reading from p, this time we read the actual file handle. you can use memcpy to copy the file handle from p to &fhp->fh_handle.fh_base.
6. increment p by the file handle's size, plus any possible padding bytes. For example, if the file handle's size is 23 bytes, then increment p by 24 bytes; if the file handle's size is 6 bytes, then increment p by 8 bytes.
7. return p.

### Implementing decode_file_name()

```c
static __be32 * decode_file_name(__be32 *p, char **namp, unsigned int *lenp);
```

Similarly, the file name is also a variable-length object, and according to the XDR standard, a variable-length object usually has a prepended integer containing the byte count, which tells us the size of this object, which in this case, is the file name. (in the context of a file name, size actually means the length of this file name). The byte count itself consumes 4 bytes. Also, according to the XDR standard, any data item that is not a multiple of 4 bytes in lengths must be padded with zero bytes. With these padding bytes, the whole object will now contain an integral number of 4-byte units. With such knowledge, now you can follow these steps to implement *decode_file_name*():

1. read 4 bytes from p, and that will be the length of the file name. save it in the address pointed to by *lenp*. (use *ntohl*() here)
2. increment p by 4 bytes because these 4 bytes are just read.
3. let *namp* point to p. **Warning**: the prototype of this *decode_file_name*() function suggests that *namp* is NOT a pointer which points to a char variable, but rather, it is a pointer which points to a pointer. So let *namp* point to p means, when deferencing *namp*, we should get p. Also, remember to cast, otherwise you will get a compiler warning.
4. increment p by the file name's length (in bytes), plus any possible padding bytes. For example, if the file name is 5 bytes long, then increment p by 8 bytes; if the file name is 10 bytes long, then increment p by 12 bytes.
5. return p.


**Note**: you are recommended to use this special trick to print the file name:

```c
printk(KERN_INFO "the file name is: %.*s\n", len, *namp);
```

this printk statement will print *len* bytes of the file name, which does not have a null byte (i.e., '\0') at its end.

### Implementing encode_fattr3()

```c
static __be32 * encode_fattr3(struct svc_rqst *rqstp, __be32 *p, struct svc_fh *fhp, struct kstat *stat);
```
When a REMOVE RPC call is finished, the server calls *encode_fattr3*() to encode the parent directory's attributes in *p*. In addition, other RPC calls may also send back a file's attributes to the client. Thus, when *encode_fattr3*() is called, *stat* could mean the stat of a file, or the stat of a directory. Both cases should be considered, and directory is just a special type of file.

you can follow these steps to implement *encode_fattr3*():

1. if stat represents a file, write 1 into p; if stat represents a directory, write 2 into p. (use *htonl*() here) you can use this macro to determine it's a file or a directory:

```c
S_ISDIR(stat->mode)
```

this macro returns 1 if it's a directory.

increment p by 4 bytes.

2. write stat->mode to p. increment p by 4 bytes. (use *htonl*() here)
3. write stat->nlink to p. increment p by 4 bytes. (use *htonl*() here)
4. write stat->uid.val to p. increment p by 4 bytes. (use *htonl*() here)
5. write stat->gid.val to p. increment p by 4 bytes. (use *htonl*() here)
6. write stat->size to p. Note that the file's size is a 64-bit integer, yet p is a 32-bit pointer, write the size to p is therefore a little tricky, you can use the following function to do so.

```c
p = xdr_encode_hyper(p, (u64) stat->size);
```
the function will increment p by 8 bytes, so you should not increment p by yourself in this step.

7. write stat->blocks to p. Again, the file's used blocks (in bytes) is a 64-bit integer, yet p is a 32-bit pointer, write the used blocks (in bytes) to p is therefore a little tricky, you can use the following function to do so.

```c
p = xdr_encode_hyper(p, ((u64)stat->blocks) << 9);	// we left shift 9 bits here, because in current Linux systems, block size is 512 bytes, which is 2^9.
```
again, the function will increment p by 8 bytes, so you should not increment p by yourself in this step.

8. the file is stored on some device. in this step, we write the device information to p, and the information include major device number and minor device number. You can get the major device number using this macro: MAJOR(stat->rdev), and get the minor device number via this macro: MINOR(stat->rdev).

increment p by 4 bytes after writing the major device number to p; and then increment p by 4 bytes after writing the minor device number to p. (use *htonl*() here)

9. write the file system id to p. Again, the file system's id is a 64-bit integer, yet p is a 32-bit pointer. you can once again use *xdr_encode_hyper*(), and write it like this:

```c
p = xdr_encode_hyper(p, (u64)huge_encode_dev(fhp->fh_dentry->d_inode->i_sb->s_dev));
```

again, the function will increment p by 8 bytes, so you should not increment p by yourself in this step.

10. write the inode number (stat->ino) to p. this once again is a 64 bit integer, and you should already know which function to call.
11. write the last access time to p. The access time includes stat->atime.tv_sec and stat->atime.tv_nsec, each is 32-bit. increment p by 4 bytes after write stat->atime.tv_sec to p, and also increment p by 4 bytes after writing stat->atime.tv_nsec to p.
12. write the last modify time to p. The modify time includes stat->mtime.tv_sec and stat->mtime.tv_nsec, each is 32-bit. increment p by 4 bytes after write stat->mtime.tv_sec to p, and also increment p by 4 bytes after writing stat->mtime.tv_nsec to p.
13. write the last attributes change time to p. The attributes change time includes stat->ctime.tv_sec and stat->ctime.tv_nsec, each is 32-bit. increment p by 4 bytes after write stat->ctime.tv_sec to p, and also increment p by 4 bytes after writing stat->ctime.tv_nsec to p. (use *htonl*() in step 11, 12, and 13)
14. return p.

## Testing

**Note**: in the following, we assume the NFS server's IP address is 192.168.56.114. Replace this ip address with your NFS server's IP address. Before you can test your network file system, make sure there is a network connection between your client and server - for example, they should be able to *ping* each other, and *ssh* to each other.

### NFS Server Side

#### One Time Setup

The first time (and only the first time), run the following commands to disable firewall on the server side - because it by default blocks the NFS service.

```console
[cs452@xyno ~]$ sudo systemctl stop firewalld
[cs452@xyno ~]$ sudo setenforce 0
[cs452@xyno ~]$ sudo systemctl disable firewalld
```

The first time (and only the first time), run the following commands to enable (and start) the rpc service on the server.

```console
[cs452@xyno ~]$ sudo systemctl enable rpcbind.service
[cs452@xyno ~]$ sudo systemctl start rpcbind.service
```
The first time (and only the first time), run this *mkdir* command to create the export directory /opt/test1.

```console
[cs452@xyno ~]$ sudo mkdir /opt/test1
```

And then export this directory in /etc/exports, your /etc/exports should look like this:

```console
[cs452@xyno ~]$ cat /etc/exports
/opt/test1 *(rw,sync,no_root_squash)
```

This line is saying, we want the server's /opt/test1 directory to be available to every other computer in the same network. And other computers just need to mount the server's /opt/test1 directory into their directory tree.

#### Regular Testing

Run the following commands to load the kernel module and start the NFS service:

```console
[cs452@xyno ~]$ sudo insmod bmw.ko
[cs452@xyno ~]$ sudo systemctl start nfs
```

When all tests are done, run the following to stop the NFS server and unload the nfsd kernel module.

```console
[cs452@xyno nfsd]$ sudo systemctl stop nfs
[cs452@xyno nfsd]$ sudo umount /proc/fs/nfsd 
[cs452@xyno nfsd]$ sudo rmmod bmw 
```

### NFS Client Side

#### One Time Setup

The first time (and only the first time), run this *mkdir* command to create the mount point directory /tmp/mnt.

```console
[cs452@xyno ~]$ mkdir /tmp/mnt
```

#### Regular Testing

Once the mount point directory is created, run the following command to mount the remote directory exported by the NFS server:

```console
[cs452@xyno ~]$ sudo mount -t nfs 192.168.56.114:/opt/test1 /tmp/mnt
```

If the above *mount* command fails, run this to confirm your server is indeed running and its /opt/test1 directory is indeed exported:

```console
[cs452@xyno ~]$ showmount -e 192.168.56.114
Export list for 192.168.56.114:
/opt/test1 *
```

If your showmount command shows a result like above, then your mount command should succeed; if not, then very likely there is no network connection between your client and server.

Next, run *cd* to enter into this directory.

```console
[cs452@xyno ~]$ cd /tmp/mnt
```

After this, you can test the NFS file system within this /tmp/mnt directory. You are required to test commands including *touch*, *mkdir*, *ls -l*, *rm -f*, *rmdir*. You can use *vi* or *echo* to edit files, and then use *cat* to read the file.

When all tests are done, leave this /tmp/mnt and run this *umount* command to unmount the NFS file system.

```console
[cs452@xyno ~]$ cd
[cs452@xyno ~]$ sudo umount /tmp/mnt
```

## Expected Results

### Current State

Before you implement anything, if you compile the starter code, load the kernel module, and then go to the client side, and  mount the file system on the client side, you will get:

```console
[cs452@xyno ~]$ sudo mount -t nfs 192.168.56.114:/opt/test1 /tmp/mnt
mount.nfs: Protocol not supported
```

In other words, the mount itself will fail.

### After Implementation

The following tests show that mount succeeds. And then file creation (touch), directory creation (mkdir), and directory list (ls -l) are all successful.

```console
[cs452@xyno ~]$ sudo mount -t nfs 192.168.56.114:/opt/test1 /tmp/mnt
[cs452@xyno ~]$ cd /tmp/mnt/
[cs452@xyno mnt]$ ls
[cs452@xyno mnt]$ touch abc
[cs452@xyno mnt]$ touch bbc
[cs452@xyno mnt]$ mkdir cdc
[cs452@xyno mnt]$ ls -l
total 0
-rw-rw-r--. 1 cs452 cs452 0 Dec  1  2022 abc
-rw-rw-r--. 1 cs452 cs452 0 Dec  1  2022 bbc
drwxrwxr-x. 2 cs452 cs452 6 Dec  1  2022 cdc
```

The following tests show that file deletion (rm -f), and directory deletion (rmdir) are all successful.

```console
[cs452@xyno mnt]$ ls -l
total 0
-rw-rw-r--. 1 cs452 cs452 0 Dec  1  2022 abc
-rw-rw-r--. 1 cs452 cs452 0 Dec  1  2022 bbc
drwxrwxr-x. 2 cs452 cs452 6 Dec  1  2022 cdc
[cs452@xyno mnt]$ rm -f abc
[cs452@xyno mnt]$ rm -f bbc
[cs452@xyno mnt]$ rmdir cdc
[cs452@xyno mnt]$ ls -l
total 0
```

The following tests show that file writing (echo >) and reading (cat) are all successful.

```console
[cs452@xyno mnt]$ ls -l
total 0
[cs452@xyno mnt]$ echo "this is a file" > abab
[cs452@xyno mnt]$ echo "this is another file" > bbcc
[cs452@xyno mnt]$ ls -l
total 8
-rw-rw-r--. 1 cs452 cs452 15 Dec  1  2022 abab
-rw-rw-r--. 1 cs452 cs452 21 Dec  1  2022 bbcc
[cs452@xyno mnt]$ cat abab
this is a file
[cs452@xyno mnt]$ cat bbcc
this is another file
```

Double confirm from the server side (This step is very important, just so you know the files are indeed created on the server.)

```console
[cs452@xyno cs452-network-file-system]$ ls -l /opt/test1/
total 8
-rw-rw-r--. 1 cs452 cs452 15 Dec  1 04:02 abab
-rw-rw-r--. 1 cs452 cs452 21 Dec  1 04:02 bbcc
[cs452@xyno cs452-network-file-system]$ cat /opt/test1/abab 
this is a file
[cs452@xyno cs452-network-file-system]$ cat /opt/test1/bbcc 
this is another file
```

## Submission

Due: 23:59pm, December 15th, 2022. Late submission will not be accepted/graded.

## Project Layout

All files necessary for compilation and testing need to be submitted, this includes source code files, header files, and Makefile. The structure of the submission folder should be the same as what was given to you.

## Grading Rubric (Undergraduate and Graduate)

- [70 pts] Functional requirements (from client's perspective):

  - file creation works (touch). /10
  - file read/write works (edit file and then cat). /20
  - directory creation works (mkdir). /10
  - directory list works (ls -l). /10
  - file deletion works (rm -f). /10
  - directory deletion works when the directory is empty (rmdir). /10

- [10 pts] Compiler warnings:

  - Each compiler warning will result in a 3 point deduction.
  - You are not allowed to suppress warnings.
  - You won't get these points if you didn't implement any of the above functional requirements.

- [10 pts] Module can be installed and removed without crashing the system:

  - You won't get these points if your module doesn't implement any of the above functional requirements.

- [10 pts] Documentation:

  - README.md file (rename this current README file to README.orig and rename the README.template to README.md.)
  - You are required to fill in every section of the README template, missing 1 section will result in a 2-point deduction.
