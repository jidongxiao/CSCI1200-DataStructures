int tofu = 3;
int chicken = 2;
double** fish = new double*[tofu];
for (int beef = 0; beef < tofu; beef++) {
  fish[beef] = new double[chicken];
}
fish[0][0] = 1.41421;
fish[0][1] = 1.61803;
fish[1][0] = 2.71828;
fish[1][1] = 3.14159;
fish[2][0] = 6.02214;
