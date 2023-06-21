window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerHTML = '<img width="40px" height="40px" src="assets/images/return.png"/>';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Animaismon',
            location: {
                lat: -26.915493045742146,
                lng: -49.05746340751648,
            },
        },
    ];
}

var models = [
    {
        url: 'assets/lesser_dog_-_undertale/scene.gltf',
        scale: '0.005 0.005 0.005',
        rotation: '0 180 0',
        info: 'Cachorro Guerreiro, Lv. 70, HP 150/150',
    },
    {
        url: 'assets/low_poly_dog/scene.gltf',
        scale: '0.001 0.001 0.001',
        rotation: '0 180 0',
        info: 'Cachorro Caramelo, Lv. 10, HP 150/150',
    },
    {
        url: 'assets/capybara/scene.gltf',
        scale: '0.5 0.5 0.5',
        info: 'Capivara, Lv. 10, HP 30/10',
        rotation: '0 180 0',
    },
    {
        url: 'assets/samurai_capybara/scene.gltf',
        scale: '0.9 0.9 0.9',
        rotation: '0 180 0',
        info: 'Capivara Samurai, Lv. 80, HP 100/100',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}