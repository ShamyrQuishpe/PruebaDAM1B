import { Component } from '@angular/core';
import { Directory, Filesystem, Encoding } from '@capacitor/filesystem';
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})

export class Tab5Page {

  text: string = '';
  message: string = '';

  async saveFile() {
    try {
      await Filesystem.writeFile({
        path: 'mi_archivo.txt',
        data: this.text,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      this.message = 'Archivo guardado exitosamente, puedes encontrarlo en tu gestor de archivos en /documentos';
    } catch (error:any) {
      this.message = 'Error al guardar el archivo: ' + error.message;
    }
  }
  
}
