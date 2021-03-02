import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageComponent } from 'app/components/message/message.component';
import { ImportarUsuarioService } from './importar-usuario.service';
import { RetornoServiceModel } from 'app/models/retornoService.model';

@Component({
  selector: 'app-importar-usuario',
  templateUrl: './importar-usuario.component.html',
  styleUrls: ['./importar-usuario.component.scss']
})
export class ImportarUsuarioComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent
  @ViewChild('arquivoEscolhido')
  myInputVariable: ElementRef;
  private file;
  isDisabled : boolean;
  constructor(private service: ImportarUsuarioService) { }

  ngOnInit() {
    this.isDisabled=true;
  }

  recebeArquivo(event) {
    this.file = event.target.files;
    this.isDisabled=false;
  }

  enviarArquivo() {
    let fileList: FileList = this.file;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);

      this.service.enviarArquivo(formData)
      .then((response: any) => {
        if (response.codigoRetorno == "SUCESSO") {
          this.mensagem.sucesso("Arquivo enviado com sucesso",0);
          this.myInputVariable.nativeElement.value = "";
          this.isDisabled=true;
        } else {
          this.mensagem.erro("Falha ao enviar arquivo " + response.mensagemRetorno ,0);
        }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao enviar arquivo" + erro ? erro : "",0);
      });
    }
  }
}
