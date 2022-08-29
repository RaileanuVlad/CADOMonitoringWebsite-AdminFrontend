export class Scoala {
  nr: number;
  id: number;
  judet: string;
  localitate: string;
  strada: string;
  nrStrada: string;
  mediu: string;
  nume: string;
  sirues: string;
  director: string;
  furnizorDate: string;
  nrFurnizor: string;
  total: string;
  romi: string;
  dizabilitati: string;
  parinti: string;
  burse: string;
  repetenti: string;
  online: string;
  remediala: string;
  explicatie: string;
  checked: string;
  semnatura: string;
  nrInreg: string;
  nrIntr: string;
  dataIntr: string;
  email: string;
  parola: string;
  uProcent: number;
  cProcent: number;
  uProcentC: number;
  cProcentC: number;
  token?: string;
  unitateId: number[];
  unitateNume: string[];
  burseC: string;
  checkedC: string;
  directorC: string;
  dizabilitatiC: string;
  explicatieC: string;
  furnizorDateC: string;
  nrFurnizorC: string;
  nrInregC: string;
  onlineC: string;
  parintiC: string;
  remedialaC: string;
  repetentiC: string;
  romiC: string;
  romiE: string;
  semnaturaC: string;
  siruesC: string;
  totalC: string;
  unitateModerator: string[];
  mscolar: string;
  romani: string;
  finantari: string;
  plan: string;
  msanitar: string;
  expert: string;

  constructor(input?: any) {
    Object.assign(this, input);
  }
}
