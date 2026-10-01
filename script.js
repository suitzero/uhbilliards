
/**
 * -------------------------------------------------------------
 * Localization (i18n)
 * -------------------------------------------------------------
 */
const i18n = {
    ko: {
        reset: "초기화",
        langToggle: "EN",
        stage1Title: "Stage 1: 거울 반사 (Reflection)",
        stage1Desc: "거울의 중심이나 끝을 드래그하여 각도를 맞춰 레이저를 목표에 도달시키세요.",
        stage2Title: "Stage 2: 굴절 (Snell's Law)",
        stage2Desc: "유리 매질을 통과할 때 빛이 꺾이는 각도를 이용해 목표에 도달시키세요.",
        stage3Title: "Stage 3: 광 분배기 (Beam Splitter)",
        stage3Desc: "빔 스플리터를 이용해 빛을 50:50으로 나누어 두 개의 목표를 동시에 켜세요.",
        stage4Title: "Stage 4: Optical AND Gate",
        stage4Desc: "빔 스플리터를 역으로 활용해 두 빛이 겹치게 하여 임계치 이상이 되도록 하세요.",
        stage5Title: "Stage 5: Optical OR Gate",
        stage5Desc: "두 경로 중 하나의 빛만 도달해도 디텍터가 활성화됩니다.",
        stage6Title: "Stage 6: 마하-젠더 간섭계 라우팅",
                stage6Desc: "여러 거울과 스플리터를 사용해 빛을 복잡하게 라우팅하여 두 목표를 모두 활성화하세요.",
        stage7Title: "Stage 7: 마하-젠더 간섭계 (MZI)",
        stage7Desc: "위상 천이기(Phase Shifter)를 이용해 빛의 위상을 바꿔 보강/상쇄 간섭을 일으켜 원하는 곳으로 빛을 라우팅하세요.",
        stage8Title: "Stage 8: 광학 XOR 게이트 (Optical XOR)",
        stage8Desc: "레이저를 클릭해 켜거나 끕니다. 두 레이저 중 하나만 켜질 때만 디텍터가 켜지게 만드세요. (위상차 이용)",
        stage9Title: "Stage 9: 광학 NOT 게이트 (Optical NOT)",
        stage9Desc: "입력 레이저(토글 가능)가 켜지면 상쇄 간섭이 일어나 디텍터가 꺼지고, 꺼지면 기준 레이저 빛이 도달해 디텍터가 켜지도록 만드세요.",
        opticsMZITitle: "마하-젠더 간섭계",
        opticsMZIDesc: "빛을 두 경로로 나눈 뒤 다시 합칠 때, 경로의 위상 차이에 따라 보강 혹은 상쇄 간섭이 발생합니다.",
        opticsXORTitle: "간섭을 이용한 XOR 연산",
        opticsXORDesc: "두 빛이 만날 때 위상이 반대면 완전히 상쇄(0)되고, 하나만 있으면 빛이 도달(1)하는 원리를 이용한 논리 연산입니다.",
        opticsNOTTitle: "광학 NOT 게이트",
        opticsNOTDesc: "기준 신호와 입력 신호를 상쇄 간섭시켜, 입력이 있을 때 출력을 0으로 반전시킵니다.",
        opticsReflectionTitle: "반사의 법칙",
        opticsReflectionDesc: "매질의 경계면에서 반사될 때, 입사각과 반사각은 법선을 기준으로 항상 같습니다.",
        opticsSnellTitle: "스넬의 법칙",
        opticsSnellDesc: "빛이 서로 다른 매질을 통과할 때 굴절률(n)의 차이에 의해 진행 방향이 꺾입니다.",
        opticsSplitterTitle: "파동 광학: 분배",
        opticsSplitterDesc: "빔 스플리터는 빛의 절반을 투과시키고 절반을 반사시킵니다.",
        opticsANDTitle: "광학 논리 게이트",
        opticsANDDesc: "디텍터의 요구 강도가 높습니다. 두 개의 광원 신호가 합쳐져야만 활성화됩니다.",
        opticsORTitle: "광학 OR 게이트",
        opticsORDesc: "디텍터의 요구 강도가 낮습니다. 하나의 신호만 도달해도 활성화됩니다.",
        opticsRoutingTitle: "광 라우팅",
        opticsRoutingDesc: "빛의 경로를 여러 갈래로 나누고 다시 모아 원하는 곳으로 전달합니다.",
        clearAll: "모든 스테이지 클리어! (포토닉스 마스터)",
        restart: "처음부터",
        clearStage: "Signal Detected! (클리어)",
        nextStage: "다음 스테이지",
        opticsPrinciple: "광학 원리 (Optics Principle)",
    },
    en: {
        reset: "Reset",
        langToggle: "KR",
        stage1Title: "Stage 1: Mirror Reflection",
        stage1Desc: "Drag the center or edge of the mirror to adjust the angle and guide the laser to the target.",
        stage2Title: "Stage 2: Refraction (Snell's Law)",
        stage2Desc: "Use the bending angle of light passing through the glass medium to reach the target.",
        stage3Title: "Stage 3: Beam Splitter",
        stage3Desc: "Use the beam splitter to divide the light 50:50 and light up two targets simultaneously.",
        stage4Title: "Stage 4: Optical AND Gate",
        stage4Desc: "Use the beam splitter in reverse to overlap two lights so the intensity exceeds the threshold.",
        stage5Title: "Stage 5: Optical OR Gate",
        stage5Desc: "The detector activates even if light from only one of the paths reaches it.",
        stage6Title: "Stage 6: Mach-Zehnder Routing",
                stage6Desc: "Use multiple mirrors and splitters to route light and activate both targets.",
        stage7Title: "Stage 7: Mach-Zehnder Interferometer",
        stage7Desc: "Use a Phase Shifter to alter the light's phase, creating constructive/destructive interference to route the light.",
        stage8Title: "Stage 8: Optical XOR Gate",
        stage8Desc: "Click lasers to toggle them on/off. Configure so the detector activates ONLY when one laser is on (using phase).",
        stage9Title: "Stage 9: Optical NOT Gate",
        stage9Desc: "Toggle the input laser. When it is ON, destructive interference turns the detector OFF. When OFF, the reference beam turns it ON.",
        opticsMZITitle: "Mach-Zehnder Interferometer",
        opticsMZIDesc: "When split light is recombined, the phase difference between paths causes constructive or destructive interference.",
        opticsXORTitle: "Interference XOR Computation",
        opticsXORDesc: "Logical computation using the principle that opposite phases perfectly cancel (0), while a single beam reaches (1).",
        opticsNOTTitle: "Optical NOT Gate",
        opticsNOTDesc: "Inverts the signal by destructively interfering the input signal with a constant reference beam.",
        opticsReflectionTitle: "Law of Reflection",
        opticsReflectionDesc: "When reflecting from a medium boundary, the angle of incidence and reflection are always equal relative to the normal.",
        opticsSnellTitle: "Snell's Law",
        opticsSnellDesc: "When light passes through different media, its path bends due to the difference in refractive index (n).",
        opticsSplitterTitle: "Wave Optics: Splitting",
        opticsSplitterDesc: "A beam splitter transmits half the light and reflects the other half.",
        opticsANDTitle: "Optical Logic Gate",
        opticsANDDesc: "The detector's required intensity is high. It only activates when two light signals combine.",
        opticsORTitle: "Optical OR Gate",
        opticsORDesc: "The detector's required intensity is low. A single light signal is enough to activate it.",
        opticsRoutingTitle: "Optical Routing",
        opticsRoutingDesc: "Split and recombine light paths to deliver signals to the desired destinations.",
        clearAll: "All Stages Cleared! (Photonics Master)",
        restart: "Restart",
        clearStage: "Signal Detected! (Clear)",
        nextStage: "Next Stage",
        opticsPrinciple: "Optics Principle",
    }
};

let currentLang = 'ko';
const MAX_STAGES = 9;

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('reset-btn').innerText = i18n[lang].reset;
    document.getElementById('lang-btn').innerText = i18n[lang].langToggle;
    document.getElementById('optics-panel-title').innerText = i18n[lang].opticsPrinciple;

    // Update stage texts without reloading the stage
    updateStageTexts();
    if (state === 'end') {
        showClearMessage(true); // Refresh end message language
    }
}

function updateStageTexts() {
    let t = i18n[currentLang];
    let titleKey = 'stage' + currentStage + 'Title';
    let descKey = 'stage' + currentStage + 'Desc';
    let opticsTitleKey = '';
    let opticsFormula = '';
    let opticsDescKey = '';

    if (currentStage === 1) {
        opticsTitleKey = 'opticsReflectionTitle';
        opticsFormula = 'θi = θr';
        opticsDescKey = 'opticsReflectionDesc';
    } else if (currentStage === 2) {
        opticsTitleKey = 'opticsSnellTitle';
        opticsFormula = "n1·sin(θ1) = n2·sin(θ2)";
        opticsDescKey = 'opticsSnellDesc';
    } else if (currentStage === 3) {
        opticsTitleKey = 'opticsSplitterTitle';
        opticsFormula = "I_out = I_in / 2";
        opticsDescKey = 'opticsSplitterDesc';
    } else if (currentStage === 4) {
        opticsTitleKey = 'opticsANDTitle';
        opticsFormula = "AND Gate";
        opticsDescKey = 'opticsANDDesc';
    } else if (currentStage === 5) {
        opticsTitleKey = 'opticsORTitle';
        opticsFormula = "OR Gate";
        opticsDescKey = 'opticsORDesc';
    } else if (currentStage === 6) {
        opticsTitleKey = 'opticsRoutingTitle';
        opticsFormula = "Routing";
        opticsDescKey = 'opticsRoutingDesc';
    } else if (currentStage === 7) {
        opticsTitleKey = 'opticsMZITitle';
        opticsFormula = 'I = I1 + I2 + 2√(I1I2)cos(Δφ)';
        opticsDescKey = 'opticsMZIDesc';
    } else if (currentStage === 8) {
        opticsTitleKey = 'opticsXORTitle';
        opticsFormula = 'L1 ⊕ L2 = I (Δφ = π)';
        opticsDescKey = 'opticsXORDesc';
    } else if (currentStage === 9) {
        opticsTitleKey = 'opticsNOTTitle';
        opticsFormula = 'NOT L_in = I (Δφ = π)';
        opticsDescKey = 'opticsNOTDesc';
    }

    document.getElementById('stage-title').innerText = t[titleKey];
    if (t[descKey]) document.getElementById('stage-desc').innerText = t[descKey];
    if (t[opticsTitleKey]) updateOpticsPanel(t[opticsTitleKey], opticsFormula, t[opticsDescKey]);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-btn')?.addEventListener('click', () => {
        setLanguage(currentLang === 'ko' ? 'en' : 'ko');
    });
});

/**
 * -------------------------------------------------------------
 * 2D Vector Math Library
 * -------------------------------------------------------------
 * Provides basic vector operations essential for optics calculations
 * like reflection (dot product) and refraction.
 */
class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) { return new Vec2(this.x + v.x, this.y + v.y); }
    sub(v) { return new Vec2(this.x - v.x, this.y - v.y); }
    mult(n) { return new Vec2(this.x * n, this.y * n); }
    mag() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    normalize() {
        let m = this.mag();
        return m === 0 ? new Vec2(0, 0) : new Vec2(this.x / m, this.y / m);
    }
    dot(v) { return this.x * v.x + this.y * v.y; }
    cross(v) { return this.x * v.y - this.y * v.x; } // 2D cross product equivalent (returns scalar)
    dist(v) { return this.sub(v).mag(); }
    copy() { return new Vec2(this.x, this.y); }
    // Rotate vector by angle (in radians)
    rotate(angle) {
        let cosA = Math.cos(angle);
        let sinA = Math.sin(angle);
        return new Vec2(
            this.x * cosA - this.y * sinA,
            this.x * sinA + this.y * cosA
        );
    }
}

/**
 * -------------------------------------------------------------
 * Optics Entities & Physics Engine
 * -------------------------------------------------------------
 */

// Represents a single segment of a laser beam
class BeamSegment {
    constructor(start, end, intensity = 1.0, phase = 0, color = '#0f0') {
        this.start = start; // Vec2
        this.end = end;     // Vec2
        this.intensity = intensity; // 0.0 to 1.0
        this.phase = phase; // Phase angle in radians
        this.color = color;
    }

    draw(ctx) {
        if (this.intensity < 0.05) return;
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);

        // Intensity affects opacity and thickness
        let alpha = Math.max(0.2, this.intensity);
        ctx.strokeStyle = `rgba(0, 255, 0, ${alpha})`;
        ctx.lineWidth = 2 + (this.intensity * 2);

        // Add glow effect
        ctx.shadowBlur = 10 * this.intensity;
        ctx.shadowColor = '#0f0';

        ctx.stroke();
        ctx.shadowBlur = 0; // Reset
    }
}

// Light Source (Laser)
class LaserSource {
    constructor(x, y, dirAngle) {
        this.pos = new Vec2(x, y);
        this.dir = new Vec2(Math.cos(dirAngle), Math.sin(dirAngle));
        this.angle = dirAngle;
        this.radius = 15;
        this.isOn = true;
    }

    // Interactive rotation
    setDirection(targetPos) {
        let diff = targetPos.sub(this.pos);
        this.dir = diff.normalize();
        this.angle = Math.atan2(this.dir.y, this.dir.x);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isOn ? '#333' : '#111'; // Dimmer background if off
        ctx.fill();
        ctx.strokeStyle = this.isOn ? '#0f0' : '#444'; // Dimmer border if off
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw emission direction indicator
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        let nozzleEnd = this.pos.add(this.dir.mult(this.radius + 10));
        ctx.lineTo(nozzleEnd.x, nozzleEnd.y);
        ctx.strokeStyle = '#0f0';
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}

// Detector (Target)
class Detector {
    constructor(x, y) {
        this.pos = new Vec2(x, y);
        this.radius = 20;
        this.detectedIntensity = 0;
        this.hits = []; // To store {intensity, phase} for interference calculation
        this.requiredIntensity = 0.5; // Threshold to activate
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);

        // Color based on activation
        if (this.detectedIntensity >= this.requiredIntensity) {
            ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
            ctx.strokeStyle = '#0f0';
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#0f0';
        } else {
            ctx.fillStyle = '#222';
            ctx.strokeStyle = '#555';
            ctx.shadowBlur = 0;
        }

        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw inner sensor
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = this.detectedIntensity >= this.requiredIntensity ? '#0f0' : '#444';
        ctx.fill();
    }
}

// Base class for optical components
class OpticalComponent {
    constructor(x, y, width, angle) {
        this.pos = new Vec2(x, y);
        this.width = width; // Length of the component
        this.angle = angle; // Angle in radians
        this.isDraggable = true;
        this.isRotatable = true;
        // Calculate endpoints based on center pos and angle
        this.updateEndpoints();
    }

    updateEndpoints() {
        let dir = new Vec2(Math.cos(this.angle), Math.sin(this.angle));
        let halfLen = dir.mult(this.width / 2);
        this.p1 = this.pos.sub(halfLen);
        this.p2 = this.pos.add(halfLen);

        // Normal vector (perpendicular to surface)
        this.normal = new Vec2(-Math.sin(this.angle), Math.cos(this.angle));
    }

    setPosition(x, y) {
        this.pos = new Vec2(x, y);
        this.updateEndpoints();
    }

    setAngle(angle) {
        this.angle = angle;
        this.updateEndpoints();
    }

    // Handles line segment intersection
    // Returns {hit: true/false, point: Vec2, normal: Vec2, distance: number}
    intersect(rayOrigin, rayDir) {
        // Ray-Line segment intersection logic
        let v1 = rayOrigin.sub(this.p1);
        let v2 = this.p2.sub(this.p1);
        let v3 = new Vec2(-rayDir.y, rayDir.x);

        let dot = v2.dot(v3);
        if (Math.abs(dot) < 0.0001) return null; // Parallel

        let t1 = v2.cross(v1) / dot;
        let t2 = rayDir.dot(new Vec2(v1.y, -v1.x)) / dot; // Equivalent to v1 x rayDir

        if (t1 >= 0.1 && t2 >= 0 && t2 <= 1) { // t1 >= 0.1 to avoid self-intersection
            let hitPoint = rayOrigin.add(rayDir.mult(t1));
            // Ensure normal faces the incoming ray
            let n = this.normal.copy();
            if (rayDir.dot(n) > 0) {
                n = n.mult(-1);
            }
            return {
                hit: true,
                point: hitPoint,
                normal: n,
                distance: t1
            };
        }
        return null;
    }

    // To be overridden by subclasses
    interact(rayDir, hitData, intensity, currentRay) {
        return []; // Returns array of new rays {origin, dir, intensity, phase}
    }

    draw(ctx) {
        // Base draw, overridden by subclass
    }
}

// 1. Mirror: Reflects 100% of light
class Mirror extends OpticalComponent {
    constructor(x, y, width, angle) {
        super(x, y, width, angle);
    }

    // Reflection Law: r = d - 2(d \cdot n)n
    interact(rayDir, hitData, intensity, currentRay) {
        let n = hitData.normal;
        let dot = rayDir.dot(n);
        let reflectDir = rayDir.sub(n.mult(2 * dot)).normalize();

        return [{
            origin: hitData.point,
            dir: reflectDir,
            intensity: intensity * 0.95,
            phase: currentRay ? (currentRay.phase + Math.PI) % (2 * Math.PI) : 0
        }];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 6;
        ctx.stroke();

        // Draw non-reflective back side
        let backDir = this.normal.mult(-3);
        ctx.beginPath();
        ctx.moveTo(this.p1.x + backDir.x, this.p1.y + backDir.y);
        ctx.lineTo(this.p2.x + backDir.x, this.p2.y + backDir.y);
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}

// 2. Glass (Refraction Medium): Snell's Law
class Glass extends OpticalComponent {
    constructor(x, y, width, angle, index = 1.5) {
        super(x, y, width, angle);
        this.index = index; // Refractive index (Air is approx 1.0)
    }

    // Snell's Law: n1 * sin(theta1) = n2 * sin(theta2)
    // Using vector form of refraction
    interact(rayDir, hitData, intensity, currentRay) {
        let phase = currentRay ? currentRay.phase : 0;
        // Determine if entering or exiting
        let n1 = 1.0; // Air
        let n2 = this.index; // Medium
        let n = hitData.normal;

        let cosI = -rayDir.dot(n);

        // If ray is inside medium and hitting boundary to exit
        if (cosI < 0) {
            n1 = this.index;
            n2 = 1.0;
            n = n.mult(-1);
            cosI = -rayDir.dot(n);
        }

        let eta = n1 / n2;
        let sinT2 = eta * eta * (1.0 - cosI * cosI);

        // Total Internal Reflection (TIR)
        if (sinT2 > 1.0) {
            // Reflect entirely
            let reflectDir = rayDir.add(n.mult(2 * cosI)).normalize();
            return [{ origin: hitData.point, dir: reflectDir, intensity: intensity }];
        }

        // Refraction
        let cosT = Math.sqrt(1.0 - sinT2);
        let refractDir = rayDir.mult(eta).add(n.mult(eta * cosI - cosT)).normalize();

        // Note: For a realistic block of glass, it has thickness.
        // For this 2D line-based abstraction, we just bend the ray once.
        // In a real simulation, we'd need a polygon to calculate entering and exiting.
        // For simplicity in this prototype, we treat it as an infinitely thin phase-shift boundary
        // or just apply the bend. To make it educational, we'll just bend it.
        return [{
            origin: hitData.point,
            dir: refractDir,
            intensity: intensity * 0.95 // Small absorption
        }];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.lineWidth = 15;
        ctx.stroke();

        ctx.strokeStyle = '#0ff';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

// 3. Beam Splitter: 50% Reflection, 50% Transmission
class BeamSplitter extends OpticalComponent {
    constructor(x, y, width, angle) {
        super(x, y, width, angle);
    }

    interact(rayDir, hitData, intensity, currentRay) {
        let n = hitData.normal;
        let dot = rayDir.dot(n);

        let reflectDir = rayDir.sub(n.mult(2 * dot)).normalize();
        let transmitDir = rayDir.copy();

        let phase = currentRay ? currentRay.phase : 0;
        return [
            { origin: hitData.point, dir: reflectDir, intensity: intensity * 0.5, phase: (phase + Math.PI / 2) % (2 * Math.PI) },
            { origin: hitData.point, dir: transmitDir, intensity: intensity * 0.5, phase: phase }
        ];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);

        // Dashed line for beam splitter
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#aaa';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.setLineDash([]);

        // Slightly transparent background
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 10;
        ctx.stroke();
    }
}
class PhaseShifter extends OpticalComponent {
    constructor(x, y, width, angle, phaseShift = Math.PI) {
        super(x, y, width, angle);
        this.phaseShift = phaseShift;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.strokeStyle = '#a200ff';
        ctx.lineWidth = 10;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.strokeStyle = 'rgba(200, 100, 255, 0.5)';
        ctx.lineWidth = 16;
        ctx.stroke();
    }

    interact(currentDir, hitData, currentIntensity, currentRay) {
        return [{
            origin: hitData.point,
            dir: currentDir,
            intensity: currentIntensity * 0.98,
            phase: (currentRay.phase + this.phaseShift) % (2 * Math.PI)
        }];
    }
}


/**
 * -------------------------------------------------------------
 * Ray Tracing Engine
 * -------------------------------------------------------------
 */
/**
 * Traces rays from all active sources through the scene, interacting with components and detectors.
 * Functional approach:
 * - Extracts intersections computation into a pure function `findClosestHit`.
 * - Uses `reduce` and `map` to find hits.
 * - Detectors accumulate intensity functionally before updating state.
 */
function traceRays(sources, components, detectors, maxBounces = 10) {
    let beams = [];

    // Reset detectors state
    detectors.forEach(d => { d.detectedIntensity = 0; d.hits = []; });

    // Initialize processing queue with active sources
    const raysToProcess = sources
        .filter(source => source.isOn)
        .map(source => ({
            origin: source.pos,
            dir: source.dir,
            intensity: 1.0,
            phase: source.initialPhase || 0, // Lasers can have initial phase
            bounces: 0
        }));

    // Pure function to calculate detector intersection using quadratic formula
    const getDetectorIntersection = (ray, det) => {
        const v = ray.origin.sub(det.pos);
        const b = 2 * v.dot(ray.dir);
        const c = v.dot(v) - det.radius * det.radius;
        const discriminant = b * b - 4 * c;

        if (discriminant >= 0) {
            const t = (-b - Math.sqrt(discriminant)) / 2;
            if (t >= 0.1) return t;
        }
        return null;
    };

    // Pure function to find the closest hit for a given ray among all entities
    const findClosestHit = (ray) => {
        // Map all components to hit objects, filtering out misses
        const componentHits = components
            .map(comp => ({ type: 'component', comp, data: comp.intersect(ray.origin, ray.dir) }))
            .filter(hit => hit.data !== null)
            .map(hit => ({ ...hit, distance: hit.data.distance }));

        // Map all detectors to hit objects, filtering out misses
        const detectorHits = detectors
            .map(det => ({ type: 'detector', det, distance: getDetectorIntersection(ray, det) }))
            .filter(hit => hit.distance !== null);

        // Combine all hits and reduce to find the minimum distance hit
        const allHits = [...componentHits, ...detectorHits];

        return allHits.length > 0 ?
            allHits.reduce((minHit, currentHit) => currentHit.distance < minHit.distance ? currentHit : minHit) :
            null;
    };

    // Iteratively process rays. Though we use a while loop for breadth-first queue processing,
    // the inner logic is functional.
    while (raysToProcess.length > 0) {
        const currentRay = raysToProcess.shift();

        if (currentRay.bounces > maxBounces || currentRay.intensity < 0.05) continue;

        const closestHit = findClosestHit(currentRay);

        let endPoint;
        if (closestHit) {
            if (closestHit.type === 'component') {
                endPoint = closestHit.data.point;
                beams.push(new BeamSegment(currentRay.origin, endPoint, currentRay.intensity, currentRay.phase));

                // Spawn new rays based on component interaction functionally mapped to queue items
                const newRays = closestHit.comp.interact(currentRay.dir, closestHit.data, currentRay.intensity, currentRay);
                raysToProcess.push(...newRays.map(nr => ({
                    origin: nr.origin,
                    dir: nr.dir,
                    intensity: nr.intensity,
                    phase: nr.phase,
                    bounces: currentRay.bounces + 1
                })));
            } else if (closestHit.type === 'detector') {
                endPoint = currentRay.origin.add(currentRay.dir.mult(closestHit.distance));
                beams.push(new BeamSegment(currentRay.origin, endPoint, currentRay.intensity, currentRay.phase));

                // Accumulate hit for interference calculation
                closestHit.det.hits.push({ intensity: currentRay.intensity, phase: currentRay.phase });
            }
        } else {
            // No hit, extend ray off-screen
            endPoint = currentRay.origin.add(currentRay.dir.mult(2000));
            beams.push(new BeamSegment(currentRay.origin, endPoint, currentRay.intensity, currentRay.phase));
        }
    }

    // Calculate interference using functional reduction on detector hits
    detectors.forEach(det => {
        if (det.hits.length === 0) {
            det.detectedIntensity = 0;
            return;
        }

        // Complex amplitude summation: E = sum( sqrt(I) * e^(i*phi) )
        const sumReal = det.hits.reduce((acc, hit) => acc + Math.sqrt(hit.intensity) * Math.cos(hit.phase), 0);
        const sumImag = det.hits.reduce((acc, hit) => acc + Math.sqrt(hit.intensity) * Math.sin(hit.phase), 0);

        // Intensity is square of amplitude
        let finalIntensity = (sumReal * sumReal) + (sumImag * sumImag);
        // Add tiny epsilon to avoid floating point issues where 0.000000000004 shows as >0
        if (finalIntensity < 0.01) finalIntensity = 0;

        det.detectedIntensity = finalIntensity;
    });

    return beams;
}

/**
 * -------------------------------------------------------------
 * Game State and Input Handling
 * -------------------------------------------------------------
 */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let cw = window.innerWidth;
let ch = window.innerHeight;
canvas.width = cw;
canvas.height = ch;

window.addEventListener('resize', () => {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;
});

// Game State variables
let state = 'playing'; // 'playing', 'end'
let currentStage = 1;

let lasers = [];
let components = [];
let detectors = [];
let activeBeams = [];

// Drag & Drop State
let draggedComponent = null;
let dragOffset = new Vec2(0, 0);
let isRotating = false;

function updateOpticsPanel(title, formula, desc) {
    document.querySelector('#optics-panel h3').innerText = title;
    document.getElementById('optics-formula').innerText = formula;
    document.getElementById('optics-desc').innerText = desc;
}

// Input handling
function getPointerPos(e) {
    if (e.touches && e.touches.length > 0) {
        return new Vec2(e.touches[0].clientX, e.touches[0].clientY);
    }
    return new Vec2(e.clientX, e.clientY);
}

function handleStart(e) {
    if (state !== 'playing' || e.target !== canvas) return;
    let pos = getPointerPos(e);

    // Check if clicking a laser to toggle
    for (let l of lasers) {
        if (pos.dist(l.pos) < 20) {
            l.isOn = !l.isOn;
            return;
        }
    }

    // Check if dragging a component
    for (let comp of components) {
        if (!comp.isDraggable) continue;

        // Simple distance check to center
        if (pos.dist(comp.pos) < 30) {
            draggedComponent = comp;
            dragOffset = comp.pos.sub(pos);
            // Right click/two fingers could trigger rotation, for simple UX we rotate on click near edge
            return;
        }

        // Check if clicking near edge for rotation
        if (pos.dist(comp.p1) < 20 || pos.dist(comp.p2) < 20) {
            draggedComponent = comp;
            isRotating = true;
            return;
        }
    }
}

function handleMove(e) {
    if (state !== 'playing' || !draggedComponent) return;
    let pos = getPointerPos(e);

    if (isRotating) {
        // Rotate component to face pointer
        let diff = pos.sub(draggedComponent.pos);
        let angle = Math.atan2(diff.y, diff.x);
        draggedComponent.setAngle(angle);
    } else {
        // Move component
        let newPos = pos.add(dragOffset);
        draggedComponent.setPosition(newPos.x, newPos.y);
    }
}

function handleEnd(e) {
    draggedComponent = null;
    isRotating = false;
}

canvas.addEventListener('mousedown', handleStart);
canvas.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);

canvas.addEventListener('touchstart', handleStart, {passive: false});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    handleMove(e);
}, {passive: false});
window.addEventListener('touchend', handleEnd);

/**
 * -------------------------------------------------------------
 * Stages and Game Logic
 * -------------------------------------------------------------
 */
function loadStage(stageNum) {
    lasers = [];
    components = [];
    detectors = [];
    state = 'playing';
    currentStage = stageNum;
    document.getElementById('message-banner').style.display = 'none';

    let cx = cw / 2;
    let cy = ch / 2;

    updateStageTexts();

    if (stageNum === 1) {
        lasers.push(new LaserSource(cx - 150, cy, 0)); // Pointing right
        detectors.push(new Detector(cx, cy - 150));

        // Add one draggable mirror
        let mirror = new Mirror(cx, cy, 100, Math.PI / 4);
        components.push(mirror);

    } else if (stageNum === 2) {
        lasers.push(new LaserSource(cx - 150, cy - 50, 0)); // Pointing right
        detectors.push(new Detector(cx + 150, cy + 50)); // Offset due to refraction

        // Add a block of glass (high refractive index)
        let glass = new Glass(cx, cy, 150, Math.PI / 2, 1.8);
        components.push(glass);

    } else if (stageNum === 3) {
        lasers.push(new LaserSource(cx - 150, cy, 0));
        detectors.push(new Detector(cx, cy - 150)); // Top
        detectors.push(new Detector(cx + 150, cy)); // Right

        let splitter = new BeamSplitter(cx, cy, 150, Math.PI / 4);
        components.push(splitter);

    } else if (stageNum === 4) {
        lasers.push(new LaserSource(cx - 150, cy, 0)); // Laser A
        lasers.push(new LaserSource(cx, cy + 150, -Math.PI/2)); // Laser B

        let det = new Detector(cx + 150, cy);
        det.requiredIntensity = 0.8; // Requires combination of two split beams
        detectors.push(det);

        let splitter = new BeamSplitter(cx, cy, 100, -Math.PI / 4);
        components.push(splitter);

        // Add a mirror to help redirect if needed
        components.push(new Mirror(cx - 50, cy - 100, 100, 0));

    } else if (stageNum === 5) {
        // Stage 5: Optical OR Gate
        lasers.push(new LaserSource(cx - 150, cy - 50, 0)); // Laser A
        lasers.push(new LaserSource(cx - 150, cy + 50, 0)); // Laser B

        let det = new Detector(cx + 150, cy);
        det.requiredIntensity = 0.4; // Low threshold, one beam is enough
        detectors.push(det);

        // Provide mirrors and splitters
        components.push(new BeamSplitter(cx, cy, 100, Math.PI / 4));
        components.push(new Mirror(cx, cy - 50, 80, -Math.PI / 4));
        components.push(new Mirror(cx, cy + 50, 80, Math.PI / 4));

    } else if (stageNum === 6) {
        // Stage 6: Mach-Zehnder Routing (Complex)
        lasers.push(new LaserSource(cx - 200, cy - 100, 0)); // Single source

        let det1 = new Detector(cx + 150, cy - 100);
        let det2 = new Detector(cx + 150, cy + 100);
        detectors.push(det1, det2);

        // First beam splitter
        components.push(new BeamSplitter(cx - 100, cy - 100, 100, Math.PI / 4));
        // Mirrors to route the split beams
        components.push(new Mirror(cx - 100, cy + 100, 100, Math.PI / 4));
        components.push(new Mirror(cx + 50, cy - 100, 100, -Math.PI / 4));
        // Second beam splitter to recombine/route
        components.push(new BeamSplitter(cx + 50, cy + 100, 100, -Math.PI / 4));
    } else if (stageNum === 7) {
        // Stage 7: MZI - constructive / destructive interference
        lasers.push(new LaserSource(cx - 200, cy - 100, 0)); // Source A

        let det1 = new Detector(cx + 250, cy + 100); // Right target
        let det2 = new Detector(cx + 50, cy + 250); // Down target

        det1.requiredIntensity = 0.2;
        det2.requiredIntensity = 0.2;
        detectors.push(det1, det2);

        // Beam goes from -200,-100 -> hits BS1 at -100,-100
        components.push(new BeamSplitter(cx - 100, cy - 100, 100, Math.PI / 4));
        // Reflected beam goes DOWN to -100, 100
        // Transmitted beam goes RIGHT to 50, -100

        // Mirror at -100, 100 routes RIGHT
        components.push(new Mirror(cx - 100, cy + 100, 100, Math.PI / 4));
        // Mirror at 50, -100 routes DOWN
        components.push(new Mirror(cx + 50, cy - 100, 100, Math.PI / 4));

        // Second beam splitter at 50, 100
        components.push(new BeamSplitter(cx + 50, cy + 100, 100, Math.PI / 4));

        // The user is provided a phase shifter to place in one of the paths to toggle the output
        components.push(new PhaseShifter(cx - 25, cy, 100, 0, Math.PI));
    } else if (stageNum === 8) {
        // Stage 8: Optical XOR Gate
        let l1 = new LaserSource(cx - 200, cy, 0); // L1 goes RIGHT
        let l2 = new LaserSource(cx, cy - 200, Math.PI/2); // L2 goes DOWN
        l1.isOn = true;
        l2.isOn = true; // Users can click to toggle
        lasers.push(l1, l2);

        // Detector at the right
        let det = new Detector(cx + 200, cy);
        det.requiredIntensity = 0.2;
        detectors.push(det);

        // Beam Splitter where they meet
        let bs1 = new BeamSplitter(cx, cy, 100, Math.PI/4); // / orientation

        // PhaseShifter on L2's path before the BS, adding Pi/2.
        let ps = new PhaseShifter(cx, cy - 100, 80, 0, Math.PI/2);

        components.push(bs1, ps);
    } else if (stageNum === 9) {
        // Stage 9: Optical NOT Gate
        let l_in = new LaserSource(cx - 200, cy, 0); // Input goes RIGHT
        let l_ref = new LaserSource(cx, cy - 200, Math.PI/2); // Reference goes DOWN
        l_in.isOn = true;
        l_ref.isOn = true; // Reference is always ON, but we allow user to toggle input
        // By design reference should probably be locked, but we just leave it for user to play with or keep it simple
        lasers.push(l_in, l_ref);

        // Detector at the right
        let det = new Detector(cx + 200, cy);
        det.requiredIntensity = 0.2;
        detectors.push(det);

        // Beam Splitter where they meet
        let bs1 = new BeamSplitter(cx, cy, 100, Math.PI/4); // / orientation

        // PhaseShifter on l_in's path before the BS, adding Pi to cause destructive interference when ON
        // If L_ref has phase 0 and L_in has phase Pi, when they meet at BS:
        // L_in transmitted -> phase Pi
        // L_ref reflected -> phase 0 + Pi/2 = Pi/2 (Wait, let's look at BeamSplitter implementation)
        // BeamSplitter: reflect: phase + Pi/2, transmit: phase
        // L_in transmitted to detector -> phase of L_in
        // L_ref reflected to detector -> phase of L_ref + Pi/2
        // So we need L_in phase = L_ref + Pi/2 + Pi = L_ref - Pi/2.
        // Wait, phase difference should be Pi.
        // L_in reaches detector via transmission: phase = ps.phaseShift
        // L_ref reaches detector via reflection: phase = 0 + Pi/2 = Pi/2
        // To have destructive interference (diff = Pi), ps.phaseShift should be Pi/2 + Pi = 3Pi/2 = -Pi/2
        // Or we can just set ps = PhaseShifter with 3Pi/2 or -Pi/2.
        let ps = new PhaseShifter(cx - 100, cy, 80, Math.PI/2, Math.PI * 1.5);

        components.push(bs1, ps);
    }
}

function showClearMessage(forceRefresh = false) {
    if (state === 'end' && !forceRefresh) return;
    state = 'end';
    document.getElementById('message-banner').style.display = 'block';
    if (currentStage >= MAX_STAGES) {
        document.getElementById('message-text').innerText = i18n[currentLang].clearAll;
        document.getElementById('next-stage-btn').innerText = i18n[currentLang].restart;
    } else {
        document.getElementById('message-text').innerText = i18n[currentLang].clearStage;
        document.getElementById('next-stage-btn').innerText = i18n[currentLang].nextStage;
    }
}

document.getElementById('next-stage-btn').addEventListener('click', () => {
    if (currentStage >= MAX_STAGES) {
        loadStage(1);
    } else {
        loadStage(currentStage + 1);
    }
});

document.getElementById('reset-btn').addEventListener('click', () => {
    loadStage(currentStage);
});

/**
 * -------------------------------------------------------------
 * Game Loop (Update & Render)
 * -------------------------------------------------------------
 */

function gameLoop() {
    update();
    render(ctx);
    requestAnimationFrame(gameLoop);
}

function update() {
    if (state === 'end') return;

    // Run physics/ray tracing
    activeBeams = traceRays(lasers, components, detectors);

    // Check Win Condition functionally: every detector must meet its required intensity
    let allActive = false;

    if (currentStage === 8) {
        allActive = detectors.length > 0 && detectors.every(det => det.detectedIntensity >= det.requiredIntensity);
    } else {
        allActive = detectors.length > 0 && detectors.every(det => det.detectedIntensity >= det.requiredIntensity);
    }

    if (allActive) {
        showClearMessage();
    }
}

function render(ctx) {
    // Clear canvas (background handles table pattern via CSS, but we need to clear)
    ctx.clearRect(0, 0, cw, ch);

    // Draw all entities functionally using forEach
    activeBeams.forEach(beam => beam.draw(ctx));
    components.forEach(comp => comp.draw(ctx));
    detectors.forEach(det => det.draw(ctx));
    lasers.forEach(laser => laser.draw(ctx));
}

// Start Game
loadStage(1);
requestAnimationFrame(gameLoop);
