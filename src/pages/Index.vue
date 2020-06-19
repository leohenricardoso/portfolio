<template>
  <q-page>
    <div class="row justify-between shadow-10">
      <q-img
        src="../assets/banner/bg10.jpg"
        style="height: 100vh"
      >
        <div class="row justify-center items-center full-width full-height text-center">
            <div class="col-10">
              <div class="text-uppercase text-overline text-weight-medium">Full stack Web Developer</div>
              <div class="text-white text-h1 text-weight-bolder">Leonardo Henrique</div>
              <q-btn outline rounded label="Sobre" class="q-px-xl q-mt-xl" @click="scrollToElement('skills')" />
            </div>
        </div>
      </q-img>
    </div>
  <!-- Skills -->
    <div id="skills" class="row justify-center q-pa-md q-gutter-lg q-mt-xl">
      <div class="col-12 text-weight-bold text-h3 text-center">Skills</div>
    </div>
    <div class="row justify-center q-pa-md q-gutter-lg">
      <!-- Skill 1 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.html.icon"
                class="custom-hover cursor-pointer"
                @click="skill.html.expanded = !skill.html.expanded"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.html.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              round
              class="custom-hover"
              flat
              dense
              :icon="skill.html.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.html.expanded = !skill.html.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.html.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.html.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 2 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.css.icon"
                class="custom-hover cursor-pointer"
                @click="skill.css.expanded = !skill.css.expanded"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.css.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              round
              flat
              class="custom-hover"
              dense
              :icon="skill.css.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.css.expanded = !skill.css.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.css.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.css.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 3 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.vue.icon"
                class="custom-hover cursor-pointer"
                @click="skill.vue.expanded = !skill.vue.expanded"
              />
              </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.vue.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.vue.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.vue.expanded = !skill.vue.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.vue.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.vue.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 4 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.node.icon"
                class="custom-hover cursor-pointer"
                @click="skill.node.expanded = !skill.node.expanded"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.node.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.node.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.node.expanded = !skill.node.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.node.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.node.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 5 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.javascript.icon"
                class="custom-hover cursor-pointer"
                @click="skill.javascript.expanded = !skill.javascript.expanded"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.javascript.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.javascript.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.javascript.expanded = !skill.javascript.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.javascript.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.javascript.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 6 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.php.icon"
                class="custom-hover cursor-pointer"
                @click="skill.php.expanded = !skill.php.expanded"
                />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.php.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.php.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.php.expanded = !skill.php.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.php.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.php.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 7 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.mysql.icon"
                class="custom-hover cursor-pointer"
                @click="skill.mysql.expanded = !skill.mysql.expanded"
              />
              </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.mysql.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.mysql.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.mysql.expanded = !skill.mysql.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.mysql.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.mysql.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 8 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.postgres.icon"
                class="custom-hover cursor-pointer"
                @click="skill.postgres.expanded = !skill.postgres.expanded"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.postgres.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.postgres.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.postgres.expanded = !skill.postgres.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.postgres.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.postgres.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 9 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.rest.icon"
                class="custom-hover cursor-pointer"
                @click="skill.rest.expanded = !skill.rest.expanded"
              />
              </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.rest.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.rest.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.rest.expanded = !skill.rest.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.rest.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.rest.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>

      <!-- Skill 10 -->
      <div class="col-12 col-md-2">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h1">
              <q-icon
                :name="skill.graphql.icon"
                class="custom-hover cursor-pointer"
                @click="skill.graphql.expanded = !skill.graphql.expanded"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ skill.graphql.name }}</div>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              class="custom-hover"
              round
              flat
              dense
              :icon="skill.graphql.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="skill.graphql.expanded = !skill.graphql.expanded"
            />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="skill.graphql.expanded">
              <q-separator />
              <q-card-section class="text-subtitle1">
                {{ skill.graphql.description }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
    <q-separator class="q-my-xl" />
  <!-- Skills -->
  <!-- Resume -->
    <div class="row justify-center q-mt-xl">
      <div class="col-12">
        <div class="text-center text-h3 text-weight-bold">
          Resumo
        </div>
      </div>
      <div class="col-12">
        <div class="text-center text-h6 text-weight-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit exercitationem accusamus amet?
        </div>
      </div>
    </div>
    <div class="row justify-center q-mt-xl">
      <div class="col-12 col-md-5">
        <div class="row justify-center items-center">
          <div class="col-12">
            <div class="text-h4 text-weight-medium">
              <q-icon name="fas fa-briefcase" color="primary"/> Experiência Profissional
            </div>
          </div>
        </div>
        <div class="row">
          <q-stepper
            v-model="step"
            vertical
            color="primary"
            animated
          >
            <q-step
              :name="1"
              title="Desenvolvedor Back-End"
              :done="step > 2"
            >
              <div class="text-subtitle2 text-weight-medium">Bis2bis E-commerce (Nov/2019 - Atual)</div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                Responsável pelo desenvolvimento de módulos back-end e/ou focados no painel administrativo do Magento 2.
                Em nosso time de desenvolvimento de módulos para Magento 2, utilizamos metodologia Ágil (Scrum).
              </div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                <b>Tecnologias: </b> PHP, HTML, JavaScript, XML, Magento 2
              </div>
              <q-stepper-navigation>
                <q-btn @click="step = 2" color="primary" label="Experiência anterior" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Desenvolvedor Full Stack"
              :done="step > 2"
            >
              <div class="text-subtitle2 text-weight-medium">Projetos Freelancer (Jan/2020 - Atual)</div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                Responsável pelo desenvolvimento sites e sistemas Web de diferentes tipos e finalidades com o foco
                no desempenho e na experiência do usuário. Desenvolvimento escalável com a utilização de APIs para
                integrações e utilização de padrões de projetos conhecidos, como o MVC.
                Grande parte dos projetos foram desenvolvidos utilizando frameworks atuais de
                JavaScript: Vue.js (front-end) e Node.js (back-end).
              </div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                <b>Tecnologias: </b> Vue.js, Node.js, Quasar.js, Adonis.js, MySQL, PostgreSQL, Rest API
              </div>
              <q-stepper-navigation>
                <q-btn @click="step = 3" color="primary" label="Experiência anterior" />
                <q-btn flat @click="step = 1" color="primary" label="Experiência posterior" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="3"
              title="Desenvolvedor Full Stack"
              :done="step > 3"
            >
              <div class="text-subtitle2 text-weight-medium">Veronline - Tecnologia em Wifi (Fev/2019 - Nov/2019)</div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                Responsável pela manutenção e implementação de novas ferramentas em sistemas Web internos,
                auxílio no desenvolvimento de softwares para roteadores móveis da mikrotik e
                configuração de roteadores móveis.
              </div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                <b>Tecnologias: </b> HTML, CSS, JavaScript, PHP, RouterOS Script (Mikrotik)
              </div>
              <q-stepper-navigation>
                <q-btn @click="step = 4" color="primary" label="Experiência anterior" />
                <q-btn flat @click="step = 2" color="primary" label="Experiência posterior" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="4"
              title="Desenvolvedor Full Stack"
              :done="step > 4"
            >
              <div class="text-subtitle2 text-weight-medium">Instituto de Desenvolvimento de Londrina - CODEL (Nov/2018 - Out/2019)</div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                Projeto remoto para o Instituto de Desenvolvimento de Londrina - CODEL, no
                qual fui responsável pela elaboração e desenvolvimento do sistema Web Calendário Londrina.
                Esse sistema tem por objetivo centralizar as informações de eventos que ocorrem na
                cidade de Londrina, podendo atrair investidores na área de turismo, divulgação de
                eventos e possibilitando a solicitação de auxílio no planejamento de um evento para a cidade.
              </div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                <b>Tecnologias: </b> HTML, CSS, JavaScript, Bootstrap 4, PHP, MySQL
              </div>
              <q-stepper-navigation>
                <q-btn @click="step = 5" color="primary" label="Experiência anterior" />
                <q-btn flat @click="step = 3" color="primary" label="Experiência posterior" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="5"
              title="Estagiário de Desenvolvimento Web"
            >
              <div class="text-subtitle2 text-weight-medium">UP-ONE Soluções Inteligentes (Jun/2018 - Nov/2018)</div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                Responsável pelo desenvolvimento Web de sites institucionais, desenvolvimento de temas e configuração de sites Wordpress.
              </div>
              <q-separator></q-separator>
              <div class="text-body1 q-mt-md">
                <b>Tecnologias: </b> HTML, CSS, JavaScript, PHP
              </div>
              <q-stepper-navigation>
                <q-btn @click="step = 4" color="primary" label="Experiência posterior" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </div>
      </div>
    </div>
  <!-- Resume -->
  <!-- Contato -->
    <div id="contact" class="row justify-center q-pa-md q-gutter-lg q-mt-xl">
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
              <q-btn outline rounded label="E-mail" class="q-px-xl custom-hover" />
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
              <q-btn outline rounded label="Acessar" class="q-px-xl custom-hover" />
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
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5543991821340" target="_blank"  rel="noopener noreferrer" style="text-decoration: none; color: #000;">
              <q-btn outline rounded label="WhatsApp" class="q-px-xl custom-hover" />
            </a>
          </q-card-section>
        </q-card>
      </div>
    </div>
  <!-- Contato -->
  </q-page>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'PageIndex',
  data () {
    return {
      skill: {
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
          description: 'Vue JS é um framework Javascript muito utilizado para criar aplicações single page (página única) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário.'
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
      },
      step: 1
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
/* body {
  /* font-family: 'Josefin Sans', sans-serif; */
  /* font-family: 'Permanent Marker', cursive; */
  /* font-family: 'Patrick Hand', cursive; */
  /* font-family: 'Sriracha', cursive; */

/* }*/

.custom-hover:hover {
  color: #c30000;
}
</style>
