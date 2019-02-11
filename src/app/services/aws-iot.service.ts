import { Injectable } from '@angular/core';
import * as mqtt from 'mqtt';
import v4 from 'aws-signature-v4';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AwsIotService {

  AWS_ACCESS_KEY = 'AKIAJBD4SML2U7RWIDPQ';
  AWS_SECRET_ACCESS_KEY = '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';
  AWS_IOT_ENDPOINT_HOST = 'a1cf1c9zmt9zyf-ats.iot.us-east-1.amazonaws.com';

  MQTT_TOPIC = 'topic_2';

  client: any;
  signedUrl: any;

  tempWater: number;
  lastData: Date;

  URL_SERVICIOS: string;

  constructor(public http: HttpClient) {
    this.signedUrl = v4.createPresignedURL('GET', this.AWS_IOT_ENDPOINT_HOST.toLowerCase(), '/mqtt', 'iotdevicegateway',
          '', {
              'key': this.AWS_ACCESS_KEY,
              'secret': this.AWS_SECRET_ACCESS_KEY,
              'protocol': 'wss',
              'expires': 15
          });
    this.URL_SERVICIOS = 'https://s3bvtnb4x8.execute-api.us-east-1.amazonaws.com/dev/device';
    // this.conectar();
    // this.suscribirse();
    // this.recibir();
  }

  getData(items: number, topic: string) {
    const url = this.URL_SERVICIOS + '/data/get' + '?topic=' + topic + '&quantity=' + items;
    // console.log(url);
    return this.http.get(url)
            .pipe(map( (resp: any) => {
              return resp;
            }));
  }

  conectar() {
    this.client = mqtt.connect(this.signedUrl);
    this.client.on('connect', function () {
        console.log('Conectado exitosamente a AWS IoT!  :)');
    });
    this.client.on('close', function () {
        console.log('Fallo al conectar :(');
        // this.client.end();  // no reconectar
    });
  }

  desconectar() {
    this.client.end(); // desconectar
  }

  suscribirse() {
    console.log('Suscripto');
    this.client.subscribe(this.MQTT_TOPIC);
  }

  desuscribirse() {
    this.client.unsubscribe(this.MQTT_TOPIC);
  }

  recibir() {
    this.client.on('message', function (topic, message) {
        console.log('Mensaje recibido: ' + JSON.parse(message));
        const messageJSON = JSON.parse(message);
        this.tempWater = messageJSON.tempWater;
        this.lastData = messageJSON.lastData;
    });
  }

}
