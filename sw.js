var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/ajuda.html',
        '/config.html',
        '/confirmarConta.html',
        '/criarConta.html',
        '/dados_alimentacao.html',
        '/dados_app.html',
        '/dados_contato.html',
        '/dados_email_step.html',
        '/dados_email.html',
        '/dados_pessoais.html',
        '/dados.html',
        '/entrar.html',
        '/home.html',
        '/index.html',
        '/onboarding.html',
        '/pate - ingredientes.html',
        '/pate - mapa.html',
        '/pate - passo.html',
        '/perfil.html',
        '/picopicole.html',
        '/praiacocada.html',
        '/receita - ingredientes.html',
        '/receita - mapa.html',
        '/receita_01.html',
        '/receita_02.html',
        '/receita_03.html',
        '/receita_04.html',
        '/receita_05.html',
        '/receita_06.html',
        '/receita_07.html',
        '/receita_08.html',
        '/receita_09.html',
        '/receita_10.html',
        '/receita_11.html',
        '/receita_12.html',
        '/receita_13.html',
        '/receita_concluida.html',
        '/vulcaochilli.html',
        '/ajuda.css',
        '/dados_alimentacao.css',
        '/dados_app.css',
        '/dados_email_step.css',
        '/dados_email.css',
        '/dados_pessoais.css',
        '/dados.css',
        '/home.css',
        '/index.css',
        '/perfil.css',
        '/sw.js',
        '/imagens',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});