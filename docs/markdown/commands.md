<style>
.cmd-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1);
  border-radius: 6px;
  overflow: hidden;
}

.cmd-table th {
  padding: 12px 15px;
  text-align: left;
  background-color: #1e1c1a;
  color: white;
}

.cmd-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #212121;
}

.cmd-table tbody tr:nth-child(odd) {
  background-color:rgba(0, 0, 0, 0.2);
}

.cmd-table tbody tr:nth-child(even) {
  background-color:rgba(40, 40, 40, 0.5);
}

.cmd-table code {
  background: rgba(0,0,0,0.2);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>

<table class="cmd-table">
  <thead>
    <tr>
      <th>Команда</th>
      <th>Описание</th>
      <th>Пример</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>savemap</code></td>
      <td>Полностью сохраняет карту и гриды на ней</td>
      <td><code>savemap 20 /Maps/map-name.yml</code></td>
    </tr>
    <tr>
      <td><code>savegrid</code></td>
      <td>Сохраняет только грид</td>
      <td><code>savegrid 1984 /Maps/grid-name.yml</code></td>
    </tr>
    <tr>
      <td><code>loadmap</code></td>
      <td>Загружает карту</td>
      <td><code>loadmap 20 /Maps/map-name.yml</code></td>
    </tr>
    <tr>
      <td><code>loadgrid</code></td>
      <td>Загружает грид на карту</td>
      <td><code>loadgrid 20 /Maps/map-name.yml 285 -156</code></td>
    </tr>
    <tr>
      <td><code>addmap</code></td>
      <td>Добавляет пустую инцилизированую карту</td>
      <td><code>addmap 20</code></td>
    </tr>
    <tr>
      <td><code>rmmap</code></td>
      <td>Удаляет карту</td>
      <td><code>rmmap 20</code></td>
    </tr>
    <tr>
      <td><code>rmgrid</code></td>
      <td>Удаляет грид</td>
      <td><code>rmgrid 1984</code></td>
    </tr>
    <tr>
      <td><code>mapping</code></td>
      <td>Загружает змороженую карту</td>
      <td><code>mapping 20 /Maps/map-name.yml</code><br><br>Если путь не указан то создаётся пустая карта</td>
    </tr>
    <tr>
      <td><code>mapinit</code></td>
      <td>Инцилизирует замороженую карту</td>
      <td><code>mapinit 20</code></td>
    </tr>
    <tr>
      <td><code>merge_grids</code></td>
      <td>Позволяет соединить два грида в один</td>
      <td><code>merge_grids 4005 4430 1 1</code></td>
    </tr>
    <tr>
      <td><code>variantize</code></td>
      <td>Рандомизирует все варианты плиток пола на гриде</td>
      <td><code>variantize 1984</code></td>
    </tr>
    <tr>
      <td><code>querymappaused</code></td>
      <td>Показывает заморожена ли карта</td>
      <td><code>querymappaused 20</code></td>
    </tr>
    <tr>
      <td><code>appraisegrid</code></td>
      <td>Считывает все цены предметов и суммирует их</td>
      <td><code>appraisegrid 1984</code></td>
    </tr>
    <tr>
      <td><code>colornetwork</code></td>
      <td>Перекрашивает всю сеть труб</td>
      <td><code>colornetwork 40882 Pipe #0000FFFF</code></td>
    </tr>
    <tr>
      <td><code>tpgrid</code></td>
      <td>Телепортирует грид</td>
      <td><code>tpgrid 1984 245 -564 20</code></td>
    </tr>
    <tr>
      <td><code>dock</code></td>
      <td>Попытаться состыковать 2 шлюза вместе. Не проверяется, является ли это допустимым.</td>
      <td><code>dock 4450 4449</code></td>
    </tr>
    <tr>
      <td><code>tilereplace</code></td>
      <td>Заменяет тайлы на гриде на другие</td>
      <td><code>tilereplace 1984 FloorSteel FloorSteelCheckerDark</code></td>
    </tr>
    <tr>
      <td><code>tilewalls</code></td>
      <td>Меняет тайлы под стенками на покрытие</td>
      <td><code>tilewalls 1984</code></td>
    </tr>
    <tr>
      <td><code>toggleautosave</code></td>
      <td>Переключает автосохранение карты</td>
      <td><code>toggleautosave 20</code></td>
    </tr>
    <tr>
      <td><code>lsmap</code></td>
      <td>Перечисляет список карт</td>
      <td><code>lsmap</code></td>
    </tr>
    <tr>
      <td><code>lsgrid</code></td>
      <td>Перечисляет список гридов</td>
      <td><code>lsgrid</code></td>
    </tr>
    <tr>
      <td><code>warp</code></td>
      <td>Позволяет телепортироватся к варп поинтам</td>
      <td><code>warp NFDev</code></td>
    </tr>
  </tbody>
</table>