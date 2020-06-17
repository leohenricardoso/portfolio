<template>
  <q-page>
    <div class="row justify-between shadow-10">
      <q-img
        src="../assets/banner/bg10.jpg"
        style="height: 100vh"
      >
        <div class="row justify-center items-center full-width full-height text-center">
            <div class="col-10">
              <div class="text-uppercase text-overline text-weight-medium">Fullstack Web Developer</div>
              <div class="text-white text-h1 text-weight-bolder">Leonardo Henrique</div>
              <q-btn outline rounded label="Sobre" class="q-px-xl q-mt-xl" @click="scrollToElement('skills')" />
            </div>
        </div>
      </q-img>
    </div>
    <!-- Skills -->
    <div id="skills" class="row justify-center q-pa-md q-gutter-lg q-mt-xl">
      <div class="col-12 text-weight-bold text-h3 text-center">Habilidades técnicas</div>
    </div>
    <div class="row justify-center q-pa-md q-gutter-lg">
      <!-- Skill 1 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="html.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ html.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="html.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="html.expanded = !html.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="html.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ html.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 2 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="css.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ css.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="css.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="css.expanded = !css.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="css.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ css.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 3 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="vue.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ vue.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="vue.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="vue.expanded = !vue.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="vue.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ vue.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 4 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="node.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ node.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="node.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="node.expanded = !node.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="node.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ node.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 5 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="javascript.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ javascript.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="javascript.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="javascript.expanded = !javascript.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="javascript.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ javascript.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 6 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="php.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ php.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="php.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="php.expanded = !php.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="php.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ php.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 7 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="mysql.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ mysql.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="mysql.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="mysql.expanded = !mysql.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="mysql.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ mysql.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 8 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="postgres.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ postgres.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="postgres.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="postgres.expanded = !postgres.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="postgres.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ postgres.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 9 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="rest.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ rest.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="rest.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="rest.expanded = !rest.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="rest.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ rest.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 10 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1"> <q-icon :name="graphql.icon" /></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ graphql.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="graphql.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="graphql.expanded = !graphql.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="graphql.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ graphql.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
    <q-separator class="q-my-xl" />
    <!-- Contato -->
    <div id="contact" class="row justify-center q-pa-md q-gutter-lg">
      <div class="col-12">
        <div class="text-center text-h3 text-weight-bold">
          Vamos trabalhar juntos!
        </div>
      </div>
      <div class="col-12">
        <div class="text-center text-h6 text-weight-light">
          Você pode entrar em contato comigo através de qualquer um desses canais.
        </div>
      </div>
      <div class="col-12 col-md-2 shadow-9">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h3 q-mb-sm"><q-icon name="far fa-envelope" /></div>
            <div class="text-h5">E-mail</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h6">contato@leohenrique.me</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <a href="mailto:contato@leohenrique.me" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #000;">
              <q-btn outline rounded label="E-mail" class="q-px-xl" />
            </a>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-2 shadow-9">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h3 q-mb-sm"><q-icon name="fab fa-linkedin" /></div>
            <div class="text-h5">Linkedin</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h6">/leonardo-henrique</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <a href="https://www.linkedin.com/in/leonardo-henrique-972837162" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #000;">
              <q-btn outline rounded label="Acessar" class="q-px-xl" />
            </a>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-2 shadow-9">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h3 q-mb-sm"><q-icon name="fab fa-whatsapp" /></div>
            <div class="text-h5">WhatsApp</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h6">+55 (43) 9 9182-1340</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5543991821340" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #000;">
              <q-btn outline rounded label="WhatsApp" class="q-px-xl" />
            </a>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'PageIndex',
  data () {
    return {
      html: {
        expanded: false,
        name: 'HTML 5',
        icon: 'fab fa-html5',
        description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.'
      },
      css: {
        expanded: false,
        name: 'CSS 3',
        icon: 'fab fa-css3-alt',
        description: 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.'
      },
      vue: {
        expanded: false,
        name: 'Vue.js',
        icon: 'fab fa-vuejs',
        description: 'Vue JS é um framework javascript muito utilizado para criar aplicações single page (página única) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário.'
      },
      node: {
        expanded: false,
        name: 'Node.js',
        icon: 'fab fa-node-js',
        description: 'Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos focado em migrar a programação do Javascript do cliente para os servidores.'
      },
      javascript: {
        expanded: false,
        name: 'Javascript',
        icon: 'fab fa-js-square',
        description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias web.'
      },
      php: {
        expanded: false,
        name: 'PHP',
        icon: 'fab fa-php',
        description: 'O PHP (um acrônimo recursivo para PHP: Hypertext Preprocessor) é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web.'
      },
      mysql: {
        expanded: false,
        name: 'MySQL',
        icon: 'fa fa-database',
        description: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation.'
      },
      postgres: {
        expanded: false,
        name: 'PostgreSQL',
        icon: 'fa fa-database',
        description: 'PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, que suporta grande parte do padrão SQL e oferece muitas funcionalidades modernas.'
      },
      rest: {
        expanded: false,
        name: 'REST Api',
        icon: 'api',
        description: 'Representational State Transfer, é um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services.'
      },
      graphql: {
        expanded: false,
        name: 'GraphQL',
        icon: 'api',
        description: 'GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API.'
      }
    }
  },
  methods: {
    scrollToElement (el) {
      const ele = document.getElementById(el)
      const target = getScrollTarget(ele)
      const offset = ele.offsetTop - ele.scrollHeight
      const duration = 500
      setScrollPosition(target, offset, duration)
    }
  }
}
</script>

<style>
body {
  /* font-family: 'Josefin Sans', sans-serif; */
  /* font-family: 'Permanent Marker', cursive; */
  /* font-family: 'Patrick Hand', cursive; */
  /* font-family: 'Sriracha', cursive; */

}
</style>
