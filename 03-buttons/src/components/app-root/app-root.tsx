import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <section>
            <section-header
              title="Tipos de botão"
              text="Dentro de um layout, botões servem para destacar ações importantes a serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades."
            ></section-header>

            <simple-button>default</simple-button>
            <simple-button>hover</simple-button>
            <simple-button>focus</simple-button>
            <simple-button>disabled</simple-button>
            <simple-button>loading</simple-button>
            <simple-button>movable</simple-button>

            <cursor-preview type="default"></cursor-preview>
            <cursor-preview type="disabled"></cursor-preview>
            <cursor-preview type="loading"></cursor-preview>
            <cursor-preview type="movable"></cursor-preview>
          </section>

          <section>
            <section-header title="Teste os botões" text="Interaja com os botões e observe a mudança de aparência e de cursores"></section-header>

            <simple-button>Interaja comigo</simple-button>
            <simple-button>Interaja comigo</simple-button>
            <simple-button>Interaja comigo</simple-button>
          </section>
        </main>
      </div>
    );
  }
}
