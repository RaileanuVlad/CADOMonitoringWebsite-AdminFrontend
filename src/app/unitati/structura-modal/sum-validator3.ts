import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class SumValidator3 {
  public sumValidator3(): ValidatorFn {
    return (formGroup: FormGroup) => {
      const total = formGroup.get('total');
      const romi = formGroup.get('romi');
      const dizabilitati = formGroup.get('dizabilitati');
      const parinti = formGroup.get('parinti');
      const burse = formGroup.get('burse');
      const repetenti = formGroup.get('repetenti');
      const online = formGroup.get('online');
      const remediala = formGroup.get('remediala');
      const nrCladiri = formGroup.get('nrCladiri');


      if (!total || !romi || !dizabilitati || !parinti || !burse || !repetenti || !online || !remediala || !nrCladiri) {
        return null;
      }

      if (nrCladiri.value <= 0) {
        return { itsZero: true };
      }
      
      if (!total.value || total.value <= 0) {
        return { totalZero: true };
      }

      if (total.value < romi.value || total.value < dizabilitati.value || total.value < parinti.value || total.value < burse.value || total.value < repetenti.value || total.value < online.value || total.value < remediala.value) {
        return { smallTotal: true };
      }

      


      return null;
    };
  }
}