const { html } = require("common-tags");

function PreviewCard({ title, image, link }) {
  return html`
    <div class="relative flex flex-row overflow-hidden rounded-lg shadow-lg lg:block lg:h-auto lg:w-auto ">
      <img src="${image}" alt="" class="m-0 aspect-square w-1/2 bg-black object-cover brightness-75 lg:aspect-auto lg:w-auto" />
      <button class="text-md w-full bg-red-500 px-2 py-1 text-white transition hover:bg-red-600 lg:absolute lg:bottom-0 lg:m-1 lg:w-auto lg:rounded-md ">
        <a href="${link}" target="_blank" class="font-normal text-white no-underline"> ${title} </a>
      </button>
    </div>
  `;
}

module.exports = PreviewCard;
