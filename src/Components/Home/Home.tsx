import React, { Suspense, useEffect } from 'react';
import styles from '../../CssModules/Home.module.css';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { useLoader, Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const Home = (props) => {

    let scene, camera, renderer, mixer;
    var target;
    camera = new THREE.PerspectiveCamera(55, (window.innerWidth) / (window.innerHeight), 0.03, 400);
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true, precision: 'mediump', alpha: true });

    const navigation = useNavigate();

    useEffect(() => {
        const elem = document.getElementById('3dmodel');
        const container = document.createElement('div');
        const loader = new GLTFLoader();
        elem.appendChild(container);

        camera.position.set(0.5, 0.70, 0.9);
        // camera.lookAt(new THREE.Vector3(0,0,0))
        // camera.rotation.y += 1

        const spotLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
        spotLight.position.set( 100, 700, 1 );
        spotLight.lookAt(new THREE.Vector3(0,0,0))

        scene.add( spotLight );
        // scene.background = colorWhite;
        const tex = new RGBELoader()
            .load('http://localhost:5000/night.hdr', function (texture) {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.environment = texture;
            }) ;

        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth/2, window.innerHeight/2  );
        renderer.setClearColor( 0x000000, 0 );
        const material1 = new THREE.MeshPhysicalMaterial({ color: 'white', envMap: tex, reflectivity: 1, roughness: 0, transmission: 0.95, metalness: 0.8 })

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.lookAt(new THREE.Vector3(0,0,0.4));

        container.appendChild(renderer.domElement)
        loader.load('http://localhost:5000/sky_car.glb', function (gltf) {
            var object = gltf.scene;
            object.position.set(0,0,0);
            (object.children[3].children[0].children[6] as THREE.Mesh).material = material1;
            console.log(object.children[3].children[0])
            // object.scale.set( 60, 60, 60 );
            // mixer = new THREE.AnimationMixer( gltf.scene );
            // console.log( gltf.animations );
            // mixer.clipAction( gltf.animations[ 0 ] ).play();

            scene.add(object);
            renderer.render(scene, camera);
        })
    }, [])

    var clock = new THREE.Clock();
    var angle = 0; // текущий угол
    var angularSpeed = THREE.MathUtils.degToRad(5); // угловая скорость - градусов в секунду
    var delta = 0;
    var radius = 3;

    // function animate() {
    //     delta = clock.getDelta();
    //     requestAnimationFrame(animate)
    //     camera.position.x = Math.cos(angle) * radius;
    //     camera.position.z = Math.sin(angle) * radius;
    //     angle += angularSpeed * delta; // приращение угла
    //     camera.lookAt(new THREE.Vector3(0,0,0))
    //     // camera.position.x += Math.cos((Math.PI * 90) / 360)*0.01
    //     // camera.position.z += Math.sin((Math.PI * 90) / 360)*0.01
    //     // camera.position.y += -0.01
    //     renderer.render(scene, camera)
    // }

    // function animate() {
    //     requestAnimationFrame( animate );

    //     if ( mixer ) mixer.update( clock.getDelta() );

    //     renderer.render( scene, camera );
    // }

    function animate() {
        requestAnimationFrame(animate);
        
        renderer.render( scene, camera );
    }
     
    animate();

    return (
        <div className={styles.home_container}>
            <div className={styles.base_container}>
                <div className={styles.decorate_background}></div>
                <div className={styles.decorateOn_background}></div>
                <div className={styles.D3model_position}>
                    <div className={styles.D3model_container} id='3dmodel'>
                    </div>
                </div>
                <div className={styles.position_title}>
                    <div className={styles.main_title_container}>
                        <h1 className={styles.main_title}>Enterprise integrations and e-commerce applications</h1>
                    </div>
                </div>
                <div className={styles.position_undertitle}>
                    <div className={styles.main_undertitle_container}>
                        <p className={styles.main_undertitle}>The WebSite platform provides the convenience of online 
                        purchases of applications and integrations of various brands.</p>
                    </div>
                </div>
                <div className={styles.position_start_btns}>
                    <div className={styles.start_btns_container}>
                        <button className={styles.contact_btn}>Contact us</button>
                        <a className={styles.getstarted_btn} onClick={() => navigation('register')}>Get started</a>
                    </div>
                </div>
                <div className={styles.position_page_number}>
                    <div className={styles.page_number_container}>
                        <div className={styles.direction_page_number}>
                            <p className={styles.page_number}>01</p>
                            <div className={styles.page_number_decorateline}></div>
                            <div className={styles.decoratepoints_number}></div>
                        </div>
                        <p className={styles.description_page}>Most trusted platform for sale apps & integrations</p>
                        <div className={styles.decoratepoints_description}></div>
                    </div>
                </div>
            </div>
            <div className={styles.secondpart_container}>
                <div className={styles.secondpart_background}></div>
                <div className={styles.secondpart_Onbackground}></div>
                <div className={styles.apps_container}>
                    <div className={styles.apps_card1}></div>
                    <div className={styles.apps_card2}></div>
                    <div className={styles.apps_card3}></div>
                </div>
            </div>
        </div>
    )
}

export default Home;