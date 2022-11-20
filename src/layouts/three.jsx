import React from 'react';

const THREE = () => {
    
    var scene = new THREE.Scene()
    scene.background = new THREE.color(0x2a3b4c)
    
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight

    );
    
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement)

    renderer.render(scene, camera)


    return (
        <>
            <THREE/>
        </>
    );
}

export default THREE;
