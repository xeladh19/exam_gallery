export default function () {
	return ` 
<div data-slider="slider1">
<div class="slider fullsize">
    <div class="slides" >
        <ul style="width: 500%"> 
        <!-- Liste des slides  -->
        </ul>
    </div>
    <div class="menu">
        <div class="slider-menu">
            <h1>Titre</h1>
            <ul class="slides">
                <!-- Menu -->
            </ul>
        </div>
    </div>
    <div class="navigation">
        <div>
            <ul class="navigation">
                <li class="previous">
                    <a href="#"><i class="material-icons navBtn">fast_rewind</i></a>
                </li>
                <li class="stop active">
                    <a href="#"><i class="material-icons navBtn">pause_circle_filled</i></a>
                </li>
                <li class="play">
                    <a href="#"><i class="material-icons navBtn">play_circle_filled</i></a>
                </li>
                <li class="next">
                    <a href="#"><i class="material-icons navBtn">fast_forward</i></a>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>`;
}
