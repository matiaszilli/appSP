import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    const url = URL_SERVICIOS + '/img';
    if (!img) {
      return url + '/usuarios/xxx'; // devuelve imagen por defecto
    }

    if (img.indexOf('https') >= 0) { // si es la imagen de google
      return img;
    }

    const nameImgTmp = img.split('/');
    const nameImg = nameImgTmp[nameImgTmp.length - 1]; // extraigo el nombre de la imagen sin el path
    switch (tipo) {
      case 'usuario':
        return url + '/usuario/' + nameImg;
      case 'medico':
        return url + '/medico/' + nameImg;
      case 'hospital':
        return url + '/hospital/' + nameImg;
      default:
        console.log('tipo de imagen no existe');
        break;
    }

  }

}
