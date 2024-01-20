'use strict';

const stringToHTML = (str) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};


// https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots
// https://www.webcomponents.org/introduction

// class AppDrawer extends HTMLElement {}
// window.customElements.define('portfolio', Portfolio);

const template =
`
<template id="portfolio">
  <style>
    article {
      width: 95%;
      height: 500px;
      border: none;
      border-radius: 5px;
      background: var(--dark);
      margin: 10px;
    }
    figure {
      width: 100%;
      height: 280px;
      margin: 0;
      border-radius: 5px 5px 0 0;
      overflow: hidden;
    }
    figure a img {
      object-fit: cover;
      height: 280px;
      max-height: 280px;
      display: block;
    }
    figcaption {
      box-sizing: border-box;
      line-height: 1.5em;
      padding: .25em;
      background: rgba( 255, 255, 255, .6 );
      -webkit-backdrop-filter: blur(4px);
      backdrop-filter: blur(4px);
      transform: translateY(0);
      transition: transform .5s;
      /* the below is awaiting full CSS support */
      /* display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      line-clamp: 5; */
    }
    figure:hover figcaption {
      transform: translateY(-100%);
      /* transition: all .5s; */
    }
    h3 {
      color: var(--light);
      text-align: center;
      margin: .5em;
    }
    p {
      color: #ccc;
      margin: .5em;
    }
  </style>
  <article>
    <figure>
      <a href="<slot name='pf_img_link'></slot>">
        <picture>
          <source type="image/avif" srcset="
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@640w.avif 640w, 
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@960w.avif 960w,
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@1280w.avif 1280w,
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@1920w.avif 1920w,
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@2560w.avif 2560w,
            images/portfolio/<slot name='pf_img_name'></slot>.avif
            ">
          <img loading="lazy" srcset="
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@640w.webp 640w, 
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@960w.webp 960w,
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@1280w.webp 1280w,
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@1920w.webp 1920w,
            images/portfolio/rspnsvs/<slot name='pf_img_name'></slot>@2560w.webp 2560w" src="
            images/portfolio/<slot name='pf_img_name'></slot>.webp" alt="<slot name='pf_img_alt'></slot>"
            sizes="
            (min-width: 700px) 60vw,
            (min-width: 1000px) 40vw,
            100vw">
        </picture>
      </a>
      <figcaption><slot name="pf_img_caption"></slot></figcaption>
    </figure>
    <h3><slot name="pf_heading"></slot></h3>
    <!-- <p><slot name="pf_date"></slot></p> -->
    <p><slot name="pf_paragraph"></slot></p>
  </article>
</template>
`
const templateContent = stringToHTML(template);



const newPort = 
`<portfolio>
  <span slot="pf_img_link">https://fania.uk</span>
  <span slot="pf_img_name">images/portfolio/classes</span>
  <span slot="pf_img_alt">classes alt</span>
  <span slot="pf_img_caption">Classes test</span>
  <span slot="pf_heading">My Classes heading</span>
  <span slot="pf_date">December 2023</span>
  <span slot="pf_paragraph">First Para</span>
  <span slot="pf_paragraph">Second Para</span>
</portfolio>
`

const newPortContent = stringToHTML(newPort);


// const original = 
// `<article>
//   <figure>
//     <a href="${pf_img_link}">
//       <picture>
//         <source type="image/avif" srcset="
//           images/portfolio/rspnsvs/${pf_img_name}@640w.avif 640w, 
//           images/portfolio/rspnsvs/${pf_img_name}@960w.avif 960w,
//           images/portfolio/rspnsvs/${pf_img_name}@1280w.avif 1280w,
//           images/portfolio/rspnsvs/${pf_img_name}@1920w.avif 1920w,
//           images/portfolio/rspnsvs/${pf_img_name}@2560w.avif 2560w,
//           images/portfolio/${pf_img_name}.avif
//           ">
//         <img loading="lazy" srcset="
//           images/portfolio/rspnsvs/${pf_img_name}@640w.webp 640w, 
//           images/portfolio/rspnsvs/${pf_img_name}@960w.webp 960w,
//           images/portfolio/rspnsvs/${pf_img_name}@1280w.webp 1280w,
//           images/portfolio/rspnsvs/${pf_img_name}@1920w.webp 1920w,
//           images/portfolio/rspnsvs/${pf_img_name}@2560w.webp 2560w" src="
//           images/portfolio/${pf_img_name}.webp" alt="${pf_img_alt}"
//           sizes="
//           (min-width: 700px) 60vw,
//           (min-width: 1000px) 40vw,
//           100vw">
//       </picture>
//     </a>
//     <figcaption>${pf_img_caption}</figcaption>
//   </figure>
//   <h3>${pf_heading}</h3>
//   <!-- <p>${pf_date}</p> -->
//   <p>${pf_paragraph}</p>
// </article>
// `



// <portfolio></portfolio>





// const header = document.createElement('header');
// const shadowRoot = header.attachShadow({mode: 'open'});
// shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().
// header.shadowRoot === shadowRoot
// shadowRoot.host === header

newPortContent.attachShadow({  mode: 'open' }).appendChild(
  templateContent.cloneNode(true))

document.body.appendChild(newPortContent);