# Генератор прототипов шаттлов

### Интерактивный инструмент для создания YAML-прототипов шаттлов в формате StarHorizon.

---

<style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #0a0e17;
        color: #c9d1d9;
        min-height: 100vh;
    }
    .header {
        background: linear-gradient(135deg, #1a1f2e 0%, #191919 100%);
        padding: 20px;
        text-align: center;
    }
    .header h1 { color: #58a6ff; font-size: 1.8em; margin-bottom: 5px; }
    .header p { font-size: 0.9em; }
    .container { max-width: 900px; margin: 30px auto; padding: 0 20px; }
    .section h2 {
        font-size: 1.2em;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid #30363d;
    }
    .form-group { margin-bottom: 14px; }
    .form-group label {
        display: block;
        margin-bottom: 6px;
        font-size: 0.9em;
        font-weight: 500;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 10px 12px;
        background: #191919;
        border: 1px solid #30363d;
        border-radius: 6px;
        color: #c9d1d9;
        font-size: 0.95em;
        transition: border-color 0.2s;
    }
    .form-group input:focus,
    .form-group select:focus {
        outline: none;
        border-color: #58a6ff;
        box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
    }
    .checkbox-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 8px;
        max-height: 200px;
        overflow-y: auto;
        padding: 8px;
        background: #191919;
        border: 1px solid #30363d;
        border-radius: 6px;
    }
    .checkbox-item {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        padding: 6px 8px;
        border-radius: 4px;
        transition: background 0.15s;
    }
    .checkbox-item:hover { background: #191919; }
    .checkbox-item input[type="checkbox"] {
        accent-color: #58a6ff;
        width: 16px;
        height: 16px;
    }
    .preset-buttons { display: flex; gap: 10px; flex-wrap: wrap; }
    .preset-btn {
        padding: 10px 20px;
        background: #191919;
        border: 1px solid #30363d;
        border-radius: 6px;
        color: #c9d1d9;
        cursor: pointer;
        transition: all 0.2s;
        flex: 1;
        min-width: 120px;
    }
    .preset-btn:hover { background: #30363d; border-color: #58a6ff; }
    .preset-btn.selected { background: #1f6feb; border-color: #58a6ff; color: #fff; }
    .actions { display: flex; gap: 12px; flex-wrap: wrap; }
    .btn {
        padding: 12px 28px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }
    .btn-primary { background: #238636; color: #fff; flex: 1; }
    .btn-primary:hover { background: #2ea043; }
    .btn-secondary { background: #21262d; color: #c9d1d9; border: 1px solid #30363d; }
    .btn-secondary:hover { background: #30363d; }
    .output-section { display: none; margin-top: 20px; }
    .output-section.visible { display: block; }
    .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }
    .output-header h2 { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
    .output-box {
        background: #191919;
        border: 1px solid #30363d;
        border-radius: 6px;
        padding: 16px;
        font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
        font-size: 0.85em;
        white-space: pre-wrap;
        word-wrap: break-word;
        max-height: 500px;
        overflow-y: auto;
        line-height: 1.5;
        color: #a5d6ff;
    }
    .info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .price-calc {
        background: #191919;
        border: 1px solid #30363d;
        border-radius: 6px;
        padding: 12px;
        margin-top: 10px;
        font-size: 0.9em;
        color: #7ee787;
    }
    @media (max-width: 600px) {
        .info-row { grid-template-columns: 1fr; }
        .checkbox-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="container">
    <!-- Информация об авторе -->
    <div class="section">
        <h2>Информация об авторе</h2>
        <div class="info-row">
            <div class="form-group">
                <label>GitHub/Gitea</label>
                <input type="text" id="authorGithub" placeholder="https://...">
            </div>
            <div class="form-group">
                <label>Discord</label>
                <input type="text" id="authorDiscord" placeholder="username">
            </div>
        </div>
    </div>

    <!-- Информация об сопровождающем -->
    <div class="section">
        <h2>Информация об сопровождающем</h2>
        <div class="form-group">
            <label>Выберите сопровождающего</label>
            <div class="preset-buttons">
                <button class="preset-btn" data-preset="Astrolaris" onclick="selectMaintainer('Astrolaris')">Astrolaris</button>
                <button class="preset-btn" data-preset="Spidern" onclick="selectMaintainer('Spidern')">Spidern</button>
                <button class="preset-btn" data-preset="custom" onclick="selectMaintainer('custom')">Ввести вручную</button>
            </div>
        </div>
        <div id="customMaintainer" style="display: none; margin-top: 14px;">
            <div class="info-row">
                <div class="form-group">
                    <label>GitHub/Gitea</label>
                    <input type="text" id="maintainerGithub" placeholder="https://...">
                </div>
                <div class="form-group">
                    <label>Discord</label>
                    <input type="text" id="maintainerDiscord" placeholder="username">
                </div>
            </div>
        </div>
    </div>

    <!-- Информация о шаттле -->
    <div class="section">
        <h2>Информация о шаттле</h2>

        <div class="info-row">
            <div class="form-group">
                <label>ID шаттла</label>
                <input type="text" id="shuttleId" placeholder="Stellaris">
            </div>
        </div>

        <div class="form-group">
            <label>Полное имя с корпорацией</label>
            <input type="text" id="fullName" placeholder="NT Stellaris">
        </div>

        <div class="form-group">
            <label>Описание</label>
            <input type="text" id="description" placeholder="Краткое описание шаттла">
        </div>

        <div class="form-group">
            <label>Парент</label>
            <select id="parentVessel">
                <option value="BaseVessel">BaseVessel (по умолчанию)</option>
                <option value="BaseVesselAntag">BaseVesselAntag</option>
                <option value="StandardFrontierVessel">StandardFrontierVessel</option>
                <option value="StandardFrontierSecurityVessel">StandardFrontierSecurityVessel</option>
                <option value="StandardFrontierSecurityExpeditionVessel">StandardFrontierSecurityExpeditionVessel</option>
                <option value="StandardFrontierAntagVessel">StandardFrontierAntagVessel</option>
            </select>
        </div>

        <div class="info-row">
            <div class="form-group">
                <label>Базовая цена (appraisegrid)</label>
                <input type="number" id="priceBase" placeholder="67556" min="0" oninput="calcPrice()">
            </div>
            <div class="form-group">
                <label>Наценка верфи (%)</label>
                <input type="number" id="priceMarkup" placeholder="15" min="0" oninput="calcPrice()">
            </div>
        </div>
        <div class="price-calc" id="priceCalc">Введите базовую цену и наценку для расчёта</div>
        <div class="form-group" style="margin-top: 10px;">
            <label>Округлить до:</label>
            <input type="number" id="priceFinal" placeholder="Оставьте пустым или введите своё значение" min="0" oninput="updateFinalPrice()">
        </div>

        <div class="info-row">
            <div class="form-group">
                <label>Размер</label>
                <select id="category">
                    <option value="Micro">Micro</option>
                    <option value="Small">Small</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <div class="form-group">
                <label>Верфь (группа)</label>
                <select id="group">
                    <option value="Shipyard">Верфь фронтира</option>
                    <option value="Security">Верфь НФСД</option>
                    <option value="Syndicate">Верфь синдиката</option>
                    <option value="BlackMarket">Верфь пиратов</option>
                    <option value="Expedition">Верфь экспедиционной лоджи</option>
                    <option value="Scrap">Верфь свалки</option>
                    <option value="Sr">Верфь представителей фронтира</option>
                    <option value="Medical">Медицинская верфь</option>
                    <option value="Custom">Универсальная</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label>Доступ</label>
            <input type="text" id="access" placeholder="Оставьте пустым если не нужен">
        </div>

        <div class="form-group">
            <label>Классы</label>
            <div class="checkbox-grid" id="classesGrid"></div>
        </div>

        <div class="form-group">
            <label>Двигатели</label>
            <div class="checkbox-grid" id="enginesGrid"></div>
        </div>

        <div class="form-group" style="margin-top: 16px;">
            <label class="checkbox-item" style="display: inline-flex; gap: 8px; cursor: pointer;">
                <input type="checkbox" id="includeJobs" checked style="width: 16px; height: 16px; accent-color: #58a6ff;">
                Должности
            </label>
        </div>
    </div>

    <!-- Кнопки действий -->
    <div class="actions">
        <button class="btn btn-primary" onclick="generateYaml()">Сделать прототип</button>
        <button class="btn btn-secondary" onclick="resetForm()">Сбросить</button>
    </div>

    <!-- Вывод -->
    <div class="section output-section" id="outputSection">
        <div class="output-header">
            <h2>Сгенерированный YAML</h2>
            <div>
                <button class="btn btn-secondary" onclick="copyOutput()">Копировать</button>
            </div>
        </div>
        <div class="output-box" id="outputBox"></div>
        <div style="margin-top: 16px;">
            <button class="btn btn-secondary" onclick="downloadYaml()">Скачать yml</button>
        </div>
    </div>
</div>

<script>
    const SHUTTLE_CLASSES = [
        { value: 'Capital', label: 'Авианосец' },
        { value: 'Detainment', label: 'Тюремный' },
        { value: 'Detective', label: 'Детективный' },
        { value: 'Fighter', label: 'Штурмовой' },
        { value: 'Patrol', label: 'Патрульный' },
        { value: 'Pursuit', label: 'Перехватчик' },
        { value: 'Expedition', label: 'Экспедиционный' },
        { value: 'Scrapyard', label: 'Мусорный' },
        { value: 'Salvage', label: 'Утилизаторский' },
        { value: 'Science', label: 'Научный' },
        { value: 'Cargo', label: 'Карго' },
        { value: 'Chemistry', label: 'Химический' },
        { value: 'Botany', label: 'Ботанический' },
        { value: 'Engineering', label: 'Инженерный' },
        { value: 'Atmospherics', label: 'Атмосферный' },
        { value: 'Mercenary', label: 'Наёмнический' },
        { value: 'Medical', label: 'Медицинский' },
        { value: 'Civilian', label: 'Гражданский' },
        { value: 'Kitchen', label: 'Кухонный' },
        { value: 'Syndicate', label: 'Синдикатовский' },
        { value: 'Pirate', label: 'Пиратский' },
    ];

    const ENGINE_TYPES = [
        { value: 'AME', label: 'ДАМ' },
        { value: 'TEG', label: 'ТЭГ' },
        { value: 'Supermatter', label: 'Суперматерия' },
        { value: 'Tesla', label: 'Тесла' },
        { value: 'Singularity', label: 'Сингулярность' },
        { value: 'Solar', label: 'Солнечные панели' },
        { value: 'RTG', label: 'РИТЭГ' },
        { value: 'APU', label: 'ВСУ' },
        { value: 'Welding', label: 'Топливный генератор' },
        { value: 'Plasma', label: 'Плазменный генератор' },
        { value: 'Uranium', label: 'Урановый генератор' },
        { value: 'Bananium', label: 'Баниумный генератор' },
    ];

    const MAINTAINER_PRESETS = {
        'Astrolaris': { github: 'https://git.starhorizon.ru/Astrolaris', discord: 'astr0laris' },
        'Spidern': { github: 'https://git.starhorizon.ru/SpidernAteing', discord: 'helloohelloo' },
    };

    const SHUTTLE_PATHS = {
        'Shipyard': '/Maps/_Horizon/Shuttles/Shipyard/',
        'Security': '/Maps/_Horizon/Shuttles/Shipyard/Nfsd/',
        'Syndicate': '/Maps/_Horizon/Shuttles/Shipyard/Syndicate/',
        'BlackMarket': '/Maps/_Horizon/Shuttles/Shipyard/BlackMarket/',
        'Expedition': '/Maps/_Horizon/Shuttles/Shipyard/Expedition/',
        'Scrap': '/Maps/_Horizon/Shuttles/Shipyard/Scrap/',
        'Sr': '/Maps/_Horizon/Shuttles/Shipyard/Sr/',
        'Medical': '/Maps/_Horizon/Shuttles/Shipyard/Medical/',
        'Custom': '/Maps/_Horizon/Shuttles/Shipyard/Factions/',
    };

    let selectedMaintainer = null;
    let finalPrice = 0;
    let priceBaseVal = 0;
    let markupVal = 0;
    let priceRaw = 0;

    // Инициализация чекбоксов
    function initCheckboxes() {
        const classesGrid = document.getElementById('classesGrid');
        SHUTTLE_CLASSES.forEach(c => {
            const label = document.createElement('label');
            label.className = 'checkbox-item';
            label.innerHTML = `<input type="checkbox" value="${c.value}"> ${c.label}`;
            classesGrid.appendChild(label);
        });

        const enginesGrid = document.getElementById('enginesGrid');
        ENGINE_TYPES.forEach(e => {
            const label = document.createElement('label');
            label.className = 'checkbox-item';
            label.innerHTML = `<input type="checkbox" value="${e.value}"> ${e.label}`;
            enginesGrid.appendChild(label);
        });
    }

    function selectMaintainer(preset) {
        selectedMaintainer = preset;
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.preset === preset);
        });
        document.getElementById('customMaintainer').style.display = preset === 'custom' ? 'block' : 'none';
    }

    function getCheckedValues(containerId) {
        return Array.from(document.querySelectorAll(`#${containerId} input:checked`)).map(cb => cb.value);
    }

    function calcPrice() {
        const base = parseInt(document.getElementById('priceBase').value) || 0;
        const markup = parseInt(document.getElementById('priceMarkup').value) || 0;
        const raw = base * (1 + markup / 100);
        const result = Math.round(raw);
        priceBaseVal = base;
        markupVal = markup;
        priceRaw = raw;
        finalPrice = result;
        document.getElementById('priceCalc').textContent = `${base} + ${markup}% = ${raw} (автоматически: ${result})`;
        document.getElementById('priceFinal').value = '';
    }

    function updateFinalPrice() {
        const customPrice = parseInt(document.getElementById('priceFinal').value);
        if (!isNaN(customPrice) && customPrice > 0) {
            finalPrice = customPrice;
        }
    }

    function getStationProto(classes) {
        if (classes.includes('Expedition')) return 'StandardFrontierExpeditionVessel';
        const securityClasses = ['Capital', 'Detainment', 'Detective', 'Fighter', 'Patrol', 'Pursuit'];
        if (classes.some(c => securityClasses.includes(c))) return 'StandardFrontierSecurityVessel';
        if (classes.includes('Syndicate') || classes.includes('Pirate')) return 'StandardFrontierAntagVessel';
        return 'StandardFrontierVessel';
    }

    function getAvailableJobs(group, classes) {
        const specialClasses = ['Syndicate', 'Capital', 'Detective', 'Fighter', 'Patrol', 'Pursuit'];
        if (group === 'Sr' || classes.some(c => specialClasses.includes(c))) {
            if (classes.includes('Syndicate')) return 'NFPirate: [ 0, 0 ]';
            return '{}';
        }
        let jobs = '';
        jobs += '            ContractorInterview: [ 0, 0 ]\n';
        jobs += '            PilotInterview: [ 0, 0 ]\n';
        jobs += '            MercenaryInterview: [ 0, 0 ]';
        if (classes.includes('Detainment')) {
            jobs += '\n            Prisoner: [ 0, 0 ]';
        }
        return jobs;
    }

    function generateYaml() {
        const authorGithub = document.getElementById('authorGithub').value.trim() || '???';
        const authorDiscord = document.getElementById('authorDiscord').value.trim() || '???';
        const shuttleId = document.getElementById('shuttleId').value;
        const fullName = document.getElementById('fullName').value || shuttleId;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const group = document.getElementById('group').value;
        const access = document.getElementById('access').value;
        const classes = getCheckedValues('classesGrid');
        const engines = getCheckedValues('enginesGrid');

        let maintainerGithub, maintainerDiscord;
        if (selectedMaintainer === 'custom') {
            maintainerGithub = document.getElementById('maintainerGithub').value.trim() || '???';
            maintainerDiscord = document.getElementById('maintainerDiscord').value.trim() || '???';
        } else if (selectedMaintainer && MAINTAINER_PRESETS[selectedMaintainer]) {
            maintainerGithub = MAINTAINER_PRESETS[selectedMaintainer].github;
            maintainerDiscord = MAINTAINER_PRESETS[selectedMaintainer].discord;
        } else {
            maintainerGithub = '???';
            maintainerDiscord = '???';
        }

        if (!shuttleId) {
            alert('Заполните обязательное поле: ID шаттла');
            return;
        }

        if (classes.length === 0) {
            alert('Выберите хотя бы один класс');
            return;
        }

        if (engines.length === 0) {
            alert('Выберите хотя бы один двигатель');
            return;
        }

        const shuttlePath = `${SHUTTLE_PATHS[group]}${shuttleId.toLowerCase()}.yml`;
        const stationProto = getStationProto(classes);
        const includeJobs = document.getElementById('includeJobs').checked;
        const availableJobs = includeJobs ? getAvailableJobs(group, classes) : '{}';

        const parentVessel = document.getElementById('parentVessel').value;

        let yaml = '';

        yaml += '# Информация об авторе шаттла\n';
        yaml += `# GitHub/Gitea: ${authorGithub}\n`;
        yaml += `# Discord: ${authorDiscord}\n`;
        yaml += '\n';
        yaml += '# Информация об сопровождающем\n';
        yaml += `# GitHub/Gitea: ${maintainerGithub}\n`;
        yaml += `# Discord: ${maintainerDiscord}\n`;
        yaml += '\n';
        yaml += '# Прототип шаттла:\n';
        yaml += '#\n';

        // Vessel
        yaml += '- type: vessel\n';
        yaml += `  id: ${shuttleId}\n`;
        yaml += `  parent: ${parentVessel}\n`;
        yaml += `  name: ${fullName}\n`;
        yaml += `  description: ${description}\n`;
        yaml += `  price: ${finalPrice} # ${priceBaseVal}, наценка верфи ${markupVal}% = ${priceRaw}\n`;
        yaml += `  category: ${category}\n`;
        yaml += `  group: ${group}\n`;
        yaml += `  shuttlePath: ${shuttlePath}\n`;

        if (access) {
            yaml += `  access: ${access}\n`;
        }

        yaml += '  class:\n';
        classes.forEach(c => { yaml += `  - ${c}\n`; });

        yaml += '  engine:\n';
        engines.forEach(e => { yaml += `  - ${e}\n`; });

        yaml += '\n';

        // GameMap
        yaml += '\n';
        yaml += '- type: gameMap\n';
        yaml += `  id: ${shuttleId}\n`;
        yaml += `  mapName: '${fullName}'\n`;
        yaml += `  mapPath: ${shuttlePath}\n`;
        yaml += '  minPlayers: 0\n';
        yaml += '  stations:\n';
        yaml += `    ${shuttleId}:\n`;
        yaml += `      stationProto: ${stationProto}\n`;
        yaml += '      components:\n';
        yaml += '        - type: StationNameSetup\n';
        yaml += `          mapNameTemplate: '${shuttleId} {1}'\n`;
        yaml += '          nameGenerator:\n';
        yaml += '            !type:NanotrasenNameGenerator\n';
        yaml += "            prefixCreator: '14'\n";
        yaml += '        - type: StationJobs\n';
        if (!includeJobs) {
            yaml += '          availableJobs: {}\n';
        } else {
            yaml += '          availableJobs:\n';
            yaml += `${availableJobs}\n`;
        }

        document.getElementById('outputBox').textContent = yaml;
        document.getElementById('outputSection').classList.add('visible');
        document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth' });
    }

    function copyOutput() {
        const text = document.getElementById('outputBox').textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Скопировано в буфер обмена!');
        });
    }

    function downloadYaml() {
        const shuttleId = document.getElementById('shuttleId').value;
        const text = document.getElementById('outputBox').textContent;
        const blob = new Blob([text], { type: 'text/yaml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${shuttleId.toLowerCase()}.yml`;
        a.click();
        URL.revokeObjectURL(url);
    }

    function resetForm() {
        document.querySelectorAll('input[type="text"], input[type="number"]').forEach(el => el.value = '');
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
        document.getElementById('category').selectedIndex = 2;
        document.getElementById('group').selectedIndex = 0;
        document.getElementById('parentVessel').selectedIndex = 0;
        selectedMaintainer = null;
        document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('customMaintainer').style.display = 'none';
        document.getElementById('outputSection').classList.remove('visible');
        document.getElementById('priceCalc').textContent = 'Введите базовую цену и наценку для расчёта';
        document.getElementById('priceFinal').value = '';
        document.getElementById('includeJobs').checked = true;
        finalPrice = 0;
        priceBaseVal = 0;
        markupVal = 0;
        priceRaw = 0;
    }

    initCheckboxes();
</script>
