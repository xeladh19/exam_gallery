export default function (data) {
	return `
 <li class="slide" id="${data.id}">
  <figure>
      <img src="${data.image}" alt="${data.name}" />
      <figcaption>
          <a href="#" class="icon icon-info">
              <i class="material-icons">add_circle</i>
          </a>
          <div>${data.content}</div>
      </figcaption>
  </figure>
</li>
`;
}
