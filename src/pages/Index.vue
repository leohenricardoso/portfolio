<template>
  <q-page>
  <!-- DESKTOP -->
    <div class="desktop-only">
      <div class="row justify-between shadow-10">
        <q-img src="../assets/banner/bg7.jpg" style="height: 100vh">
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
      <div class="q-py-xl">
        <div id="skills" class="row justify-center q-pa-md q-gutter-lg">
          <div class="col-12 text-weight-bold text-h3 text-center line-center">Skills</div>
        </div>
        <div class="row justify-center q-pa-md q-gutter-lg">
          <!-- Skill 1 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.html.icon" class="custom-hover cursor-pointer"
                      @click="skill.html.expanded = !skill.html.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.html.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 2 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.css.icon" class="custom-hover cursor-pointer"
                      @click="skill.css.expanded = !skill.css.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.css.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 3 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.vue.icon" class="custom-hover cursor-pointer"
                      @click="skill.vue.expanded = !skill.vue.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.vue.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 4 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.node.icon" class="custom-hover cursor-pointer"
                      @click="skill.node.expanded = !skill.node.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.node.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 5 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.javascript.icon" class="custom-hover cursor-pointer"
                      @click="skill.javascript.expanded = !skill.javascript.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.javascript.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 6 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.php.icon" class="custom-hover cursor-pointer"
                      @click="skill.php.expanded = !skill.php.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.php.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 7 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.mysql.icon" class="custom-hover cursor-pointer"
                      @click="skill.mysql.expanded = !skill.mysql.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.mysql.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 8 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.postgres.icon" class="custom-hover cursor-pointer"
                      @click="skill.postgres.expanded = !skill.postgres.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.postgres.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 9 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.rest.icon" class="custom-hover cursor-pointer"
                      @click="skill.rest.expanded = !skill.rest.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.rest.name }}</div>
                </q-card-section>

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
          </div>

          <!-- Skill 10 -->
          <div class="col-12 col-md-2">
            <div class="shadow-3">
              <q-card flat bordered class="my-card text-center">
                <q-card-section>
                  <div class="text-h1">
                    <q-icon :name="skill.graphql.icon" class="custom-hover cursor-pointer"
                      @click="skill.graphql.expanded = !skill.graphql.expanded" />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-h5">{{ skill.graphql.name }}</div>
                </q-card-section>

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
        </div>
      </div>
      <!-- Skills -->
      <!-- Projects -->
      <div class="bg-gray q-py-xl">
        <div class="row justify-center q-mb-lg">
          <div class="col-12">
            <div class="col-12 text-weight-bold text-h3 text-center line-center q-mb-md">Projetos</div>
          </div>
          <div class="col-12">
            <div class="text-center text-h6 text-weight-light">
              Alguns de meus projetos não podem ser compartilhados publicamente por se tratarem de sistemas internos.
            </div>
          </div>
        </div>
        <div class="row justify-center q-gutter-md">
          <!-- Acadêmico -->
          <div class="col-12 col-md-3">
            <q-card class="my-card shadow-9">
              <q-img src="../assets/projects/academico.png" basic class="cld-card-size"
                @mouseover="projects.academico.showButtomProject = true"
                @mouseleave="projects.academico.showButtomProject = false">
                <div v-show="projects.academico.showButtomProject" class="full-width full-height">
                  <q-btn outline rounded label="Detalhes" class="q-px-xl absolute-center"
                    @click="projects.academico.displayDialog = true" />
                </div>
              </q-img>
            </q-card>
          </div>
          <!-- Calendar -->
          <div class="col-12 col-md-3">
            <q-card class="my-card shadow-9">
              <q-img src="../assets/projects/calendar.png" basic class="cld-card-size"
                @mouseover="projects.calendar.showButtomProject = true"
                @mouseleave="projects.calendar.showButtomProject = false">
                <div v-show="projects.calendar.showButtomProject" class="full-width full-height">
                  <q-btn outline rounded label="Detalhes" class="q-px-xl absolute-center"
                    @click="projects.calendar.displayDialog = true" />
                </div>
              </q-img>
            </q-card>
          </div>
          <!-- Golsat -->
          <div class="col-12 col-md-3">
            <q-card class="my-card shadow-9">
              <q-img src="../assets/projects/golsat.png" basic class="cld-card-size"
                @mouseover="projects.golsat.showButtomProject = true"
                @mouseleave="projects.golsat.showButtomProject = false">
                <div v-show="projects.golsat.showButtomProject" class="full-width full-height">
                  <q-btn outline rounded label="Detalhes" class="q-px-xl absolute-center"
                    @click="projects.golsat.displayDialog = true" />
                </div>
              </q-img>
            </q-card>
          </div>
          <!-- Guinchos Calixto -->
          <div class="col-12 col-md-3">
            <q-card class="my-card shadow-9">
              <q-img src="../assets/projects/guincho-calixto.png" basic class="cld-card-size"
                @mouseover="projects.guinchosCalixto.showButtomProject = true"
                @mouseleave="projects.guinchosCalixto.showButtomProject = false">
                <div v-show="projects.guinchosCalixto.showButtomProject" class="full-width full-height">
                  <q-btn outline rounded label="Detalhes" class="q-px-xl absolute-center"
                    @click="projects.guinchosCalixto.displayDialog = true" />
                </div>
              </q-img>
            </q-card>
          </div>
          <!-- Transportes Calixto -->
          <div class="col-12 col-md-3">
            <q-card class="my-card shadow-9">
              <q-img src="../assets/projects/transcalixto.png" basic class="cld-card-size shadow-9"
                @mouseover="projects.transCalixto.showButtomProject = true"
                @mouseleave="projects.transCalixto.showButtomProject = false">
                <div v-show="projects.transCalixto.showButtomProject" class="full-width full-height">
                  <q-btn outline rounded label="Detalhes" class="q-px-xl absolute-center"
                    @click="projects.transCalixto.displayDialog = true" />
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
      <!-- Projects -->
      <!-- Resume -->
      <div class="q-py-xl">
        <div class="row justify-center">
          <div class="col-12">
            <div class="text-center text-h3 text-weight-bold line-center q-mb-md">
              Resumo
            </div>
          </div>
          <div class="col-12">
            <div class="text-center text-h6 text-weight-light">
              Conheça um pouco da minha trajetória profissional e acadêmica.
            </div>
          </div>
        </div>
        <div class="row justify-center q-mt-sm q-gutter-xl">
          <!-- #region profissional xp -->
          <div class="col-12 col-md-5">
            <div class="row justify-center items-center q-mb-md">
              <div class="col-12">
                <div class="text-h4 text-weight-medium">
                  <q-icon name="fas fa-briefcase" color="primary" /> Experiência Profissional
                </div>
              </div>
            </div>
            <div class="row">
              <q-stepper v-model="step" vertical color="primary" animated class="shadow-0">
                <q-step :name="1" title="Desenvolvedor Back-End" :done="step > 2">
                  <div class="text-subtitle2 text-weight-medium">Bis2bis E-commerce (Nov/2019 - Atual)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Responsável pelo desenvolvimento de módulos back-end e/ou focados no painel administrativo do Magento
                    2.
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

                <q-step :name="2" title="Desenvolvedor Full Stack" :done="step > 2">
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

                <q-step :name="3" title="Desenvolvedor Full Stack" :done="step > 3">
                  <div class="text-subtitle2 text-weight-medium">Veronline - Tecnologia em Wifi (Fev/2019 - Nov/2019)
                  </div>
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

                <q-step :name="4" title="Desenvolvedor Full Stack" :done="step > 4">
                  <div class="text-subtitle2 text-weight-medium">Instituto de Desenvolvimento de Londrina - CODEL
                    (Nov/2018 - Out/2019)</div>
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

                <q-step :name="5" title="Estagiário de Desenvolvimento Web">
                  <div class="text-subtitle2 text-weight-medium">UP-ONE Soluções Inteligentes (Jun/2018 - Nov/2018)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Responsável pelo desenvolvimento Web de sites institucionais, desenvolvimento de temas e configuração
                    de sites Wordpress.
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
          <!-- #endregion profissional xp -->
          <!-- #region graduation -->
          <div class="col-12 col-md-5">
            <div class="row justify-center items-center q-mb-md">
              <div class="col-12">
                <div class="text-h4 text-weight-medium">
                  <q-icon name="fas fa-graduation-cap" color="primary" /> Formação Acadêmica
                </div>
              </div>
            </div>
            <div class="row">
              <q-stepper v-model="graduationStep" vertical color="primary" animated class="shadow-0">
                <q-step :name="1" title="Análise e Desenvolvimento de Sistemas" :done="graduationStep > 2">
                  <div class="text-subtitle2 text-weight-medium">Universidade Positivo - Londrina (Fev/2018 - Jul/2020)
                  </div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa,
                    implanta e mantém sistemas de informação, utilizando metodologias de gestão de projetos e de
                    desenvolvimento de programas.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 2" color="primary" label="Próximo" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="2" title="Vue JS - Guia Completo (Vue CLI, Vue Router, Vuex e GraphQL)"
                  :done="graduationStep > 2">
                  <div class="text-subtitle2 text-weight-medium">Plínio Naves - Udemy (Jan/2020 - Abr/2020)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    VueJS é um Framework JavaScript Progressivo (adotado incrementalmente) para a construção de interfaces
                    do usuário.
                    Se tornou extremamente popular pela sua habilidade de mesclar simplicidade e performance!
                    Com uma curva de aprendizado muito baixa, Vue entrega ao desenvolvedor as ferramentas essenciais a
                    qualquer projeto, seja ele de pequeno até grande porte a nível empresarial.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 3" color="primary" label="Próximo" />
                    <q-btn flat @click="graduationStep = 1" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="3" title="Curso Web Moderno" :done="graduationStep > 3">
                  <div class="text-subtitle2 text-weight-medium">Cod3r Cursos Online - Udemy (Dez/2019 - Fev/2020)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Neste curso iremos abordar o desenvolvimento Web de ponta a ponta, para que você seja capaz de
                    construir uma aplicação com as principais tecnologias do mercado. São 14 cursos dentro de um só. Você
                    irá aprender Javascript, que é hoje a linguagem da atualidade, várias empresas estão migrando suas
                    bases de PHP, Python e outras para terem suas bases completamente feitas em javascript. Também irá
                    aprender Node, os últimos recursos de HTML e CSS, Gulp, Webpack, jQuery, Bootstrap, React ( Tecnologia
                    usada por umas das maiores empresas do mundo, o Facebook), Angular, Vue JS, ExpressJS, MySQL, MongoDB
                    e Electron.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 4" color="primary" label="Próximo" />
                    <q-btn flat @click="graduationStep = 2" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="4" title="Jogos 3D com Unity" :done="graduationStep > 4">
                  <div class="text-subtitle2 text-weight-medium">Wiliam Nascimento - Udemy (Jun/2018 - Nov/2018)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Atualmente quando ouvimos falar em desenvolvimento de jogos certamente você já ouviu falar em Unity
                    3D.
                    E não é por acaso que ela é sempre citada quando se fala nesse assunto, segundo o site de notícias de
                    tecnologia The Next Web, a engine domina 45% do mercado global de games.
                    Essa enorme popularidade faz jus ao seu poder de criar gráficos incríveis e em alta performance, com a
                    Unity é possível criar jogos em 2D ou 3D para diferentes plataformas.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 5" color="primary" label="Próximo" />
                    <q-btn flat @click="graduationStep = 3" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="5" title="Programação de Games">
                  <div class="text-subtitle2 text-weight-medium">Microlins (Mar/2015 - Mar/2016)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Curso com o objetivo de iniciar conteúdos básicos para o desenvolvimento de games, onde o aluno
                    aprenderá a trabalhar com imagens e terá contato com lógica de programação através do Flash.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 4" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>
              </q-stepper>
            </div>
          </div>
          <!-- #endregion graduation -->
        </div>
      </div>
      <!-- Resume -->
      <!-- Contato -->
      <div class="q-py-xl bg-gray">
        <div id="contact" class="row justify-center q-pa-md q-gutter-lg">
          <div class="col-12">
            <div class="text-center text-h3 text-weight-bold line-center">
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
                <div class="text-h3 q-mb-sm">
                  <q-icon name="far fa-envelope" />
                </div>
                <div class="text-h5">E-mail</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle2">contato@leohenrique.me</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <a href="mailto:contato@leohenrique.me" target="_blank" rel="noopener noreferrer"
                  style="text-decoration: none; color: #000;">
                  <q-btn outline rounded label="E-mail" class="q-px-lg custom-hover" />
                </a>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-2 shadow-9">
            <q-card flat bordered class="my-card text-center">
              <q-card-section>
                <div class="text-h3 q-mb-sm">
                  <q-icon name="fab fa-linkedin" />
                </div>
                <div class="text-h5">Linkedin</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle2">/leonardo-henrique</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <a href="https://www.linkedin.com/in/leonardo-henrique-972837162" target="_blank"
                  rel="noopener noreferrer" style="text-decoration: none; color: #000;">
                  <q-btn outline rounded label="Acessar" class="q-px-lg custom-hover" />
                </a>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-2 shadow-9">
            <q-card flat bordered class="my-card text-center">
              <q-card-section>
                <div class="text-h3 q-mb-sm">
                  <q-icon name="fab fa-whatsapp" />
                </div>
                <div class="text-h5">WhatsApp</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle2">+55 (43) 9 9182-1340</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5543991821340" target="_blank"
                  rel="noopener noreferrer" style="text-decoration: none; color: #000;">
                  <q-btn outline rounded label="WhatsApp" class="q-px-lg custom-hover" />
                </a>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <!-- Contato -->
      <!-- Dialogs -->
      <q-dialog v-model="projects.academico.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.academico.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/academico.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.academico.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.academico.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.calendar.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.calendar.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/calendar.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.calendar.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.calendar.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.golsat.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.golsat.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/golsat.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.golsat.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.golsat.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.guinchosCalixto.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.guinchosCalixto.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/guincho-calixto.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.guinchosCalixto.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.guinchosCalixto.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.transCalixto.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.transCalixto.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/transcalixto.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.transCalixto.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.transCalixto.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  <!-- DESKTOP -->
  <!-- MOBILE -->
    <div class="mobile-only">
      <div class="row justify-between shadow-10">
        <q-img src="../assets/banner/bg7.jpg" style="height: 100vh">
          <div class="row justify-center items-center full-width full-height text-center">
            <div class="col-10">
              <div class="text-uppercase text-overline text-weight-medium">Full stack Web Developer</div>
              <div class="text-white text-h2 text-weight-bolder">Leonardo Henrique</div>
              <q-btn outline rounded label="Sobre" class="q-px-xl q-mt-xl" @click="scrollToElement('skills-mobile')" />
            </div>
          </div>
        </q-img>
      </div>
      <!-- Skills -->
      <div class="q-py-xl">
        <div id="skills-mobile" class="row justify-center q-pa-md q-gutter-lg">
          <div class="col-12 text-weight-bold text-h4 text-center line-center">Skills</div>
        </div>
        <q-carousel
          v-model="skills.slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          navigation
          arrows
          class="rounded-borders q-pb-xl"
          style="height: auto"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row justify-center q-gutter-sm">
              <!-- Skill 1 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.html.icon" class="custom-hover cursor-pointer"
                          @click="skill.html.expanded = !skill.html.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.html.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- Skill 2 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.css.icon" class="custom-hover cursor-pointer"
                          @click="skill.css.expanded = !skill.css.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.css.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- Skill 3 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.vue.icon" class="custom-hover cursor-pointer"
                          @click="skill.vue.expanded = !skill.vue.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.vue.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- Skill 4 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.node.icon" class="custom-hover cursor-pointer"
                          @click="skill.node.expanded = !skill.node.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.node.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row justify-center q-gutter-sm">
              <!-- Skill 5 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.javascript.icon" class="custom-hover cursor-pointer"
                          @click="skill.javascript.expanded = !skill.javascript.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.javascript.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- Skill 6 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.php.icon" class="custom-hover cursor-pointer"
                          @click="skill.php.expanded = !skill.php.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.php.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- Skill 7 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.mysql.icon" class="custom-hover cursor-pointer"
                          @click="skill.mysql.expanded = !skill.mysql.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.mysql.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- Skill 8 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.postgres.icon" class="custom-hover cursor-pointer"
                          @click="skill.postgres.expanded = !skill.postgres.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.postgres.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row justify-center q-gutter-sm">
              <!-- Skill 9 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.rest.icon" class="custom-hover cursor-pointer"
                          @click="skill.rest.expanded = !skill.rest.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.rest.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- Skill 10 -->
              <div class="col-4 col-md-2">
                <div class="shadow-3">
                  <q-card flat bordered class="my-card text-center">
                    <q-card-section>
                      <div class="text-h3">
                        <q-icon :name="skill.graphql.icon" class="custom-hover cursor-pointer"
                          @click="skill.graphql.expanded = !skill.graphql.expanded" />
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle2">{{ skill.graphql.name }}</div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- Skills -->
      <!-- Projects -->
      <div class="bg-gray q-py-xl">
        <div class="row justify-center q-mb-lg">
          <div class="col-12">
            <div class="col-12 text-weight-bold text-h4 text-center line-center q-mb-md">Projetos</div>
          </div>
          <div class="col-10 col-md-12">
            <div class="text-center text-h6 text-weight-light">
              Alguns de meus projetos não podem ser compartilhados publicamente por se tratarem de sistemas internos.
            </div>
          </div>
        </div>
        <q-carousel
          v-model="projectsCarousel.slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          navigation
          arrows
          class="rounded-borders q-pb-xl bg-gray"
          style="height: auto"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row justify-center q-gutter-md">
              <!-- Acadêmico -->
              <div class="col-9 col-lg-3">
                <q-card class="my-card shadow-9">
                  <q-img src="../assets/projects/academico.png" basic class="cld-card-size" />
                  <q-card-section>
                    <div class="full-width full-height row justify-center">
                      <q-btn outline rounded label="Detalhes" class="q-px-xl"
                        @click="projects.academico.displayDialog = true" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row justify-center q-gutter-md">
              <!-- Calendar -->
              <div class="col-9 col-lg-3">
                <q-card class="my-card shadow-9">
                  <q-img src="../assets/projects/calendar.png" basic class="cld-card-size" />
                  <q-card-section>
                    <div class="full-width full-height row justify-center">
                      <q-btn outline rounded label="Detalhes" class="q-px-xl"
                        @click="projects.calendar.displayDialog = true" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row justify-center q-gutter-md">
              <!-- Golsat -->
              <div class="col-9 col-lg-3">
                <q-card class="my-card shadow-9">
                  <q-img src="../assets/projects/golsat.png" basic class="cld-card-size" />
                  <q-card-section>
                    <div class="full-width full-height row justify-center">
                      <q-btn outline rounded label="Detalhes" class="q-px-xl"
                        @click="projects.golsat.displayDialog = true" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row justify-center q-gutter-md">
              <!-- Guinchos Calixto -->
              <div class="col-9 col-lg-3">
                <q-card class="my-card shadow-9">
                  <q-img src="../assets/projects/guincho-calixto.png" basic class="cld-card-size" />
                  <q-card-section>
                    <div class="full-width full-height row justify-center">
                      <q-btn outline rounded label="Detalhes" class="q-px-xl"
                        @click="projects.guinchosCalixto.displayDialog = true" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="5" class="column no-wrap">
            <div class="row justify-center q-gutter-md">
              <!-- Transportes Calixto -->
              <div class="col-9 col-lg-3">
                <q-card class="my-card shadow-9">
                  <q-img src="../assets/projects/transcalixto.png" basic class="cld-card-size shadow-9" />
                  <q-card-section>
                    <div class="full-width full-height row justify-center">
                      <q-btn outline rounded label="Detalhes" class="q-px-xl"
                        @click="projects.transCalixto.displayDialog = true" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- Projects -->
      <!-- Resume -->
      <div class="q-py-xl">
        <div class="row justify-center">
          <div class="col-12">
            <div class="text-center text-h4 text-weight-bold line-center q-mb-md">
              Resumo
            </div>
          </div>
          <div class="col-10">
            <div class="text-center text-h6 text-weight-light">
              Conheça um pouco da minha trajetória profissional e acadêmica.
            </div>
          </div>
        </div>
        <div class="row justify-center q-mt-sm q-gutter-xl">
          <!-- #region profissional xp -->
          <div class="col-10 col-md-5">
            <div class="row justify-center items-center q-mb-md">
              <div class="col-10">
                <div class="text-h5 text-weight-medium">
                  <q-icon name="fas fa-briefcase" color="primary" /> Experiência Profissional
                </div>
              </div>
            </div>
            <div class="row">
              <q-stepper v-model="step" vertical color="primary" animated class="shadow-0">
                <q-step :name="1" title="Desenvolvedor Back-End" :done="step > 2">
                  <div class="text-subtitle2 text-weight-medium">Bis2bis E-commerce (Nov/2019 - Atual)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Responsável pelo desenvolvimento de módulos back-end e/ou focados no painel administrativo do Magento
                    2.
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

                <q-step :name="2" title="Desenvolvedor Full Stack" :done="step > 2">
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

                <q-step :name="3" title="Desenvolvedor Full Stack" :done="step > 3">
                  <div class="text-subtitle2 text-weight-medium">Veronline - Tecnologia em Wifi (Fev/2019 - Nov/2019)
                  </div>
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

                <q-step :name="4" title="Desenvolvedor Full Stack" :done="step > 4">
                  <div class="text-subtitle2 text-weight-medium">Instituto de Desenvolvimento de Londrina - CODEL
                    (Nov/2018 - Out/2019)</div>
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

                <q-step :name="5" title="Estagiário de Desenvolvimento Web">
                  <div class="text-subtitle2 text-weight-medium">UP-ONE Soluções Inteligentes (Jun/2018 - Nov/2018)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Responsável pelo desenvolvimento Web de sites institucionais, desenvolvimento de temas e configuração
                    de sites Wordpress.
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
          <!-- #endregion profissional xp -->
          <!-- #region graduation -->
          <div class="col-10 col-md-5">
            <div class="row justify-center items-center q-mb-md">
              <div class="col-10">
                <div class="text-h5 text-weight-medium">
                  <q-icon name="fas fa-graduation-cap" color="primary" /> Formação Acadêmica
                </div>
              </div>
            </div>
            <div class="row">
              <q-stepper v-model="graduationStep" vertical color="primary" animated class="shadow-0">
                <q-step :name="1" title="Análise e Desenvolvimento de Sistemas" :done="graduationStep > 2">
                  <div class="text-subtitle2 text-weight-medium">Universidade Positivo - Londrina (Fev/2018 - Jul/2020)
                  </div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa,
                    implanta e mantém sistemas de informação, utilizando metodologias de gestão de projetos e de
                    desenvolvimento de programas.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 2" color="primary" label="Próximo" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="2" title="Vue JS - Guia Completo (Vue CLI, Vue Router, Vuex e GraphQL)"
                  :done="graduationStep > 2">
                  <div class="text-subtitle2 text-weight-medium">Plínio Naves - Udemy (Jan/2020 - Abr/2020)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    VueJS é um Framework JavaScript Progressivo (adotado incrementalmente) para a construção de interfaces
                    do usuário.
                    Se tornou extremamente popular pela sua habilidade de mesclar simplicidade e performance!
                    Com uma curva de aprendizado muito baixa, Vue entrega ao desenvolvedor as ferramentas essenciais a
                    qualquer projeto, seja ele de pequeno até grande porte a nível empresarial.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 3" color="primary" label="Próximo" />
                    <q-btn flat @click="graduationStep = 1" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="3" title="Curso Web Moderno" :done="graduationStep > 3">
                  <div class="text-subtitle2 text-weight-medium">Cod3r Cursos Online - Udemy (Dez/2019 - Fev/2020)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Neste curso iremos abordar o desenvolvimento Web de ponta a ponta, para que você seja capaz de
                    construir uma aplicação com as principais tecnologias do mercado. São 14 cursos dentro de um só. Você
                    irá aprender Javascript, que é hoje a linguagem da atualidade, várias empresas estão migrando suas
                    bases de PHP, Python e outras para terem suas bases completamente feitas em javascript. Também irá
                    aprender Node, os últimos recursos de HTML e CSS, Gulp, Webpack, jQuery, Bootstrap, React ( Tecnologia
                    usada por umas das maiores empresas do mundo, o Facebook), Angular, Vue JS, ExpressJS, MySQL, MongoDB
                    e Electron.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 4" color="primary" label="Próximo" />
                    <q-btn flat @click="graduationStep = 2" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="4" title="Jogos 3D com Unity" :done="graduationStep > 4">
                  <div class="text-subtitle2 text-weight-medium">Wiliam Nascimento - Udemy (Jun/2018 - Nov/2018)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Atualmente quando ouvimos falar em desenvolvimento de jogos certamente você já ouviu falar em Unity
                    3D.
                    E não é por acaso que ela é sempre citada quando se fala nesse assunto, segundo o site de notícias de
                    tecnologia The Next Web, a engine domina 45% do mercado global de games.
                    Essa enorme popularidade faz jus ao seu poder de criar gráficos incríveis e em alta performance, com a
                    Unity é possível criar jogos em 2D ou 3D para diferentes plataformas.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 5" color="primary" label="Próximo" />
                    <q-btn flat @click="graduationStep = 3" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step :name="5" title="Programação de Games">
                  <div class="text-subtitle2 text-weight-medium">Microlins (Mar/2015 - Mar/2016)</div>
                  <q-separator></q-separator>
                  <div class="text-body1 q-mt-md">
                    Curso com o objetivo de iniciar conteúdos básicos para o desenvolvimento de games, onde o aluno
                    aprenderá a trabalhar com imagens e terá contato com lógica de programação através do Flash.
                  </div>
                  <q-separator></q-separator>
                  <q-stepper-navigation>
                    <q-btn @click="graduationStep = 4" color="primary" label="Anterior" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>
              </q-stepper>
            </div>
          </div>
          <!-- #endregion graduation -->
        </div>
      </div>
      <!-- Resume -->
      <!-- Contato -->
      <div class="q-py-xl bg-gray">
        <div id="contact" class="row justify-center q-pa-md q-gutter-lg">
          <div class="col-12">
            <div class="text-center text-h4 text-weight-bold line-center">
              Vamos trabalhar juntos!
            </div>
          </div>
          <div class="col-12">
            <div class="text-center text-h6 text-weight-light">
              Você pode entrar em contato comigo através de qualquer um desses canais.
            </div>
          </div>
          <div class="col-10 col-md-3 col-lg-2  shadow-9">
            <q-card flat bordered class="my-card text-center">
              <q-card-section>
                <div class="text-h3 q-mb-sm">
                  <q-icon name="far fa-envelope" />
                </div>
                <div class="text-h5">E-mail</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle2">contato@leohenrique.me</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <a href="mailto:contato@leohenrique.me" target="_blank" rel="noopener noreferrer"
                  style="text-decoration: none; color: #000;">
                  <q-btn outline rounded label="E-mail" class="q-px-lg custom-hover" />
                </a>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-10 col-md-3 col-lg-2 shadow-9">
            <q-card flat bordered class="my-card text-center">
              <q-card-section>
                <div class="text-h3 q-mb-sm">
                  <q-icon name="fab fa-linkedin" />
                </div>
                <div class="text-h5">Linkedin</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle2">/leonardo-henrique</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <a href="https://www.linkedin.com/in/leonardo-henrique-972837162" target="_blank"
                  rel="noopener noreferrer" style="text-decoration: none; color: #000;">
                  <q-btn outline rounded label="Acessar" class="q-px-lg custom-hover" />
                </a>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-10 col-md-3 col-lg-2 shadow-9">
            <q-card flat bordered class="my-card text-center">
              <q-card-section>
                <div class="text-h3 q-mb-sm">
                  <q-icon name="fab fa-whatsapp" />
                </div>
                <div class="text-h5">WhatsApp</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle2">+55 (43) 9 9182-1340</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5543991821340" target="_blank"
                  rel="noopener noreferrer" style="text-decoration: none; color: #000;">
                  <q-btn outline rounded label="WhatsApp" class="q-px-lg custom-hover" />
                </a>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <!-- Contato -->
      <!-- Dialogs -->
      <q-dialog v-model="projects.academico.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.academico.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/academico.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.academico.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.academico.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.calendar.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.calendar.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/calendar.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.calendar.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.calendar.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.golsat.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.golsat.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/golsat.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.golsat.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.golsat.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.guinchosCalixto.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.guinchosCalixto.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/guincho-calixto.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.guinchosCalixto.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.guinchosCalixto.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="projects.transCalixto.displayDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ projects.transCalixto.name }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="row items-center q-pb-none">
            <q-img src="../assets/projects/transcalixto.png" basic class="cld-card-size shadow-9" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-center">
              {{ projects.transCalixto.description }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <a :href="projects.transCalixto.siteLink" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none; color: #000;">
                <q-btn outline rounded label="Ver site" class="q-px-xl custom-hover" />
              </a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  <!-- MOBILE -->
  </q-page>

</template>

<script>
require('../css/style.css')
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'PageIndex',
  data () {
    return {
      skills: {
        slide: 1
      },
      projectsCarousel: {
        slide: 1
      },
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
      step: 1,
      graduationStep: 1,
      projects: {
        academico: {
          name: 'Acadêmico',
          description: 'Sistema desenvolvido para o Acadêmico. Sistema voltado para venda de cursos para psicólogos que estão iniciando sua carreira e para psicólogos experiêntes que buscam novos conhecimentos. Foi desenvolvido em Vue.js e Node.js',
          showButtomProject: false,
          siteLink: 'https://ac-academico.com.br/',
          displayDialog: false
        },
        calendar: {
          name: 'Calendário de Londrina',
          description: 'Sistema desenvolvido para o Instituto de Desenvolvimento de Londrina (CODEL). Sistema utilizado como TCC para o curso de Análise e Desenvolvimento de Sistemas na Universidade Positivo Londrina. Foi desenvolvido em Vue.js e Node.js',
          showButtomProject: false,
          siteLink: 'https://leohenrique.me/projects/calendar',
          displayDialog: false
        },
        golsat: {
          name: 'Golsat',
          description: 'Participei do desenvolvimento desse projeto na UP-ONE. Esse site foi criado utilizando a plataforma Wordpress, porém seu tema foi desenvolvido totalmente do zero, de acordo com as necessidades do cliente. As tecnologias utilizadas nesse projeto foram: HTML, CSS, JavaScript, PHP, Wordpress.',
          showButtomProject: false,
          siteLink: 'https://golsat.com.br/',
          displayDialog: false
        },
        guinchosCalixto: {
          name: 'Guinchos Calixto',
          description: 'Participei do desenvolvimento desse projeto na UP-ONE. Esse site foi criado utilizando a plataforma Wordpress, porém seu tema foi customizado de acordo com as necessidades do cliente. As tecnologias utilizadas nesse projeto foram: HTML, CSS, JavaScript, PHP, Wordpress.',
          showButtomProject: false,
          siteLink: 'https://guinchocalixto.com.br/',
          displayDialog: false
        },
        transCalixto: {
          name: 'Transportes Calixto',
          description: 'Participei do desenvolvimento desse projeto na UP-ONE. Esse site foi criado utilizando a plataforma Wordpress, porém seu tema foi customizado de acordo com as necessidades do cliente. As tecnologias utilizadas nesse projeto foram: HTML, CSS, JavaScript, PHP, Wordpress.',
          showButtomProject: false,
          siteLink: 'https://transcalixto.com.br/',
          displayDialog: false
        }
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
  .custom-hover:hover {
    color: #c30000;
  }

</style>
