import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  allTypes: Array<EntityType> = ['default', 'hover', 'focus', 'disabled', 'loading', 'movable'];

  render() {
    return (
      <div>
        <main>
          <section class="types">
            <section-header
              title="Tipos de botão"
              text="Dentro de um layout, botões servem para destacar ações importantes a serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades."
            ></section-header>

            <table>
              <tr>
                <th></th>
                <th>Botão primário</th>
                <th>Botão secundário</th>
                <th>Botão terciário</th>
                <th>Cursor</th>
              </tr>

              {this.allTypes.map(type => {
                return (
                  <tr>
                    <th>{type}</th>
                    <td>
                      <simple-button type={type} variant="primary">
                        {type} primary
                      </simple-button>
                    </td>
                    <td>
                      <simple-button type={type} variant="secondary">
                        {type} secondary
                      </simple-button>
                    </td>
                    <td>
                      <simple-button type={type} variant="tertiary">
                        {type} tertiary
                      </simple-button>
                    </td>
                    <td>
                      <cursor-preview type={type}></cursor-preview>
                    </td>
                  </tr>
                );
              })}
            </table>
          </section>

          <section class="tests">
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
