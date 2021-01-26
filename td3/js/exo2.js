/*CREER UNE SCENE*/
//pr créer une scène, on a besoin de 3 éléments => scene, camera et renderer
const scene = new THREE.Scene();
//on crée une perspective avec la caméra
//(l'étendue de la scène vue sur l'écran à un moment donné, en degré, width element, height element, plan de détourage proche, éloigné)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//le mieux est d'utiliser la largeur et la longueur de la zone qu'on veut remplir (fenêtre du navigateur en général)
//on ajoute le renderer au html avec un élément canvas. Sert pr afficher la scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*CREER UNE FORME => CUBE*/
//on crée une forme, ici un cube. Ts les sommets et faces sont déjà créé
const formA = new THREE.BoxGeometry();
// pr colorer la forme, on utilise un matériau, ici MeshBasicMaterial ms il en existe d'autre
const materialA = new THREE.MeshBasicMaterial({
    color: 0x00ff00 //on lui attribut une couleur, de la mm manière qu'en css
});
// on a aussi besoin d'un maillage 
//=> objet qui prend une géométrie et lui applique un matériau, que nous pouvons ensuite insérer dans notre scène et se déplacer librement
const cube = new THREE.Mesh(formA, materialA);
scene.add(cube); 
/*Par défaut, lorsque nous appelons scene.add (), la chose que nous ajoutons sera ajoutée aux coordonnées (0,0,0)
mais ca entraîne à la fois la caméra et le cube l'un à l'intérieur de l'autre. 
Pour éviter cela, on déplace un peu la caméra vers l'extérieur*/

/*SPHERE*/
const formB = new THREE.SphereGeometry();
const materialB = new THREE.MeshBasicMaterial({
    color: 0x00ffff
});
const sphere = new THREE.Mesh(formB, materialB);
scene.add(sphere);

camera.position.z = 5;

/*RENDRE LA SCENE*/
const animate = function () {
    //requestAnimationFrame s'arrête lorsque l'utilisateur accède à un autre onglet du navigateur et évite de créer une boucle qui 
    //dessinerai la scène à chaque fois que l'écran serait actualisé
    requestAnimationFrame(animate);

    //on anime la forme, ici le cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //on anime la forme, ici le cube
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera); //affiche la scène
};