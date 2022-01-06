export default function (data) {
	return ` 
    <li>
        <a href="#${data.id}">
            <img src="${data.image}" alt="${data.name}" />
        </a>
    </li>`;
}
