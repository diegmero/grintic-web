import{_ as a,c as s,o as e,a0 as t}from"./chunks/framework.28_os6Tw.js";const k=JSON.parse('{"title":"Cómo Limitar Recursos en Docker","description":"","frontmatter":{},"headers":[],"relativePath":"operaciones/contenedores/docker/configuraciones/recursos.md","filePath":"operaciones/contenedores/docker/configuraciones/recursos.md"}'),n={name:"operaciones/contenedores/docker/configuraciones/recursos.md"};function r(o,i,l,h,p,d){return e(),s("div",null,i[0]||(i[0]=[t(`<h1 id="como-limitar-recursos-en-docker" tabindex="-1">Cómo Limitar Recursos en Docker <a class="header-anchor" href="#como-limitar-recursos-en-docker" aria-label="Permalink to &quot;Cómo Limitar Recursos en Docker&quot;">​</a></h1><p>Docker permite limitar recursos como CPU, memoria y disco para gestionar el uso eficiente del host.</p><h2 id="_1-limitar-uso-de-cpu" tabindex="-1">1. Limitar Uso de CPU <a class="header-anchor" href="#_1-limitar-uso-de-cpu" aria-label="Permalink to &quot;1. Limitar Uso de CPU&quot;">​</a></h2><h3 id="limitar-nucleos" tabindex="-1">Limitar Núcleos <a class="header-anchor" href="#limitar-nucleos" aria-label="Permalink to &quot;Limitar Núcleos&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cpuset-cpus=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0,1&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagen</span></span></code></pre></div><p>El contenedor usará solo los núcleos 0 y 1.</p><h3 id="limitar-proporcion-de-cpu" tabindex="-1">Limitar Proporción de CPU <a class="header-anchor" href="#limitar-proporcion-de-cpu" aria-label="Permalink to &quot;Limitar Proporción de CPU&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cpu-shares=512</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagen</span></span></code></pre></div><p>El contenedor tendrá menos prioridad (512) que otros con el valor predeterminado (1024).</p><h3 id="limitar-tiempo-de-cpu" tabindex="-1">Limitar Tiempo de CPU <a class="header-anchor" href="#limitar-tiempo-de-cpu" aria-label="Permalink to &quot;Limitar Tiempo de CPU&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cpu-quota=50000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagen</span></span></code></pre></div><p>El contenedor usará el 50% de CPU disponible.</p><h2 id="_2-limitar-uso-de-memoria" tabindex="-1">2. Limitar Uso de Memoria <a class="header-anchor" href="#_2-limitar-uso-de-memoria" aria-label="Permalink to &quot;2. Limitar Uso de Memoria&quot;">​</a></h2><h3 id="limitar-ram" tabindex="-1">Limitar RAM <a class="header-anchor" href="#limitar-ram" aria-label="Permalink to &quot;Limitar RAM&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --memory=512m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagen</span></span></code></pre></div><p>Máximo 512 MB de RAM.</p><h3 id="limitar-memoria-swap" tabindex="-1">Limitar Memoria Swap <a class="header-anchor" href="#limitar-memoria-swap" aria-label="Permalink to &quot;Limitar Memoria Swap&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --memory=512m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --memory-swap=1g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagen</span></span></code></pre></div><p>Máximo 512 MB de RAM + 512 MB de swap.</p><h2 id="_3-limitar-uso-del-disco" tabindex="-1">3. Limitar Uso del Disco <a class="header-anchor" href="#_3-limitar-uso-del-disco" aria-label="Permalink to &quot;3. Limitar Uso del Disco&quot;">​</a></h2><h3 id="limitar-operaciones-de-e-s" tabindex="-1">Limitar Operaciones de E/S <a class="header-anchor" href="#limitar-operaciones-de-e-s" aria-label="Permalink to &quot;Limitar Operaciones de E/S&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --device-read-bps=/dev/sda:1mb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --device-write-bps=/dev/sda:2mb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagen</span></span></code></pre></div><p>Lectura limitada a 1 MB/s y escritura a 2 MB/s en <code>/dev/sda</code>.</p><h2 id="_4-ejemplo-completo" tabindex="-1">4. Ejemplo Completo <a class="header-anchor" href="#_4-ejemplo-completo" aria-label="Permalink to &quot;4. Ejemplo Completo&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cpuset-cpus=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0,1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cpu-quota=50000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --memory=512m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --memory-swap=1g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  imagen</span></span></code></pre></div><p>Usa núcleos 0 y 1, 50% de CPU, 512 MB de RAM y 1 GB de RAM + swap.</p><h2 id="verificar-configuracion" tabindex="-1">Verificar Configuración <a class="header-anchor" href="#verificar-configuracion" aria-label="Permalink to &quot;Verificar Configuración&quot;">​</a></h2><p>Para confirmar límites aplicados:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inspect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nombre_contenedo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div>`,29)]))}const m=a(n,[["render",r]]);export{k as __pageData,m as default};
