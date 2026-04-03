/**
 * Space Background Animation
 * Generates and animates stars with parallax effect
 */

(function() {
    'use strict';

    const canvas = document.getElementById('spaceCanvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let stars = [];
    let animationId;

    // Star layers with different speeds (parallax effect)
    const layers = [
        { count: 100, speed: 0.2, size: 1.5, color: 'rgba(200, 220, 255, 0.9)' },   // Close stars
        { count: 150, speed: 0.5, size: 1.2, color: 'rgba(180, 200, 255, 0.7)' },   // Medium stars
        { count: 200, speed: 0.8, size: 0.8, color: 'rgba(150, 180, 255, 0.5)' },   // Far stars
        { count: 250, speed: 1.2, size: 0.5, color: 'rgba(120, 150, 255, 0.3)' }    // Distant stars
    ];

    // Resize canvas to fill window
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initStars();
    }

    // Star class
    class Star {
        constructor(layerIndex) {
            this.layer = layers[layerIndex];
            this.reset();
            this.y = Math.random() * height; // Initial y can be anywhere
        }

        reset() {
            this.x = Math.random() * width;
            this.y = -10;
            this.speed = this.layer.speed * (0.8 + Math.random() * 0.4);
            this.size = this.layer.size * (0.8 + Math.random() * 0.4);
            this.twinkleSpeed = 0.02 + Math.random() * 0.03;
            this.twinklePhase = Math.random() * Math.PI * 2;
            this.brightness = 0.5 + Math.random() * 0.5;
        }

        update(time) {
            // Move star downward (simulating upward movement)
            this.y += this.speed;

            // Twinkle effect
            const twinkle = Math.sin(time * this.twinkleSpeed + this.twinklePhase);
            this.currentBrightness = this.brightness * (0.7 + 0.3 * twinkle);

            // Reset if out of bounds
            if (this.y > height + 10) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            
            // Create gradient for star glow
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 2
            );
            
            const baseColor = this.layer.color.replace(/[\d.]+\)$/g, '');
            gradient.addColorStop(0, baseColor + this.currentBrightness + ')');
            gradient.addColorStop(0.5, baseColor + (this.currentBrightness * 0.5) + ')');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    // Initialize all stars
    function initStars() {
        stars = [];
        layers.forEach((layer, layerIndex) => {
            for (let i = 0; i < layer.count; i++) {
                stars.push(new Star(layerIndex));
            }
        });
    }

    // Animation loop
    let lastTime = 0;
    function animate(currentTime) {
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Update and draw all stars
        stars.forEach(star => {
            star.update(currentTime);
            star.draw();
        });

        // Add occasional shooting star
        if (Math.random() < 0.001) {
            createShootingStar();
        }

        animationId = requestAnimationFrame(animate);
    }

    // Shooting star effect
    function createShootingStar() {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.3;
        const length = 50 + Math.random() * 100;
        const speed = 10 + Math.random() * 5;

        const shootingStar = {
            x: x,
            y: y,
            length: length,
            speed: speed,
            angle: Math.PI / 4,
            update: function() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.length *= 0.98;
            },
            draw: function() {
                if (this.length < 1) return;
                
                const gradient = ctx.createLinearGradient(
                    this.x, this.y,
                    this.x - Math.cos(this.angle) * this.length,
                    this.y - Math.sin(this.angle) * this.length
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - Math.cos(this.angle) * this.length,
                    this.y - Math.sin(this.angle) * this.length
                );
                ctx.stroke();
            }
        };

        // Animate shooting star
        function animateShootingStar() {
            shootingStar.update();
            shootingStar.draw();
            if (shootingStar.length > 1 && 
                shootingStar.x < width + 50 && 
                shootingStar.y < height + 50) {
                requestAnimationFrame(animateShootingStar);
            }
        }
        animateShootingStar();
    }

    // Handle visibility change (pause when tab is hidden)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        } else {
            lastTime = performance.now();
            animate(lastTime);
        }
    });

    // Handle resize
    window.addEventListener('resize', resize);

    // Initialize
    resize();
    lastTime = performance.now();
    animate(lastTime);

})();
