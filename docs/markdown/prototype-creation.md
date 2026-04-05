# Cоздание прототипов шаттлов
### Eсли вы хотите сперва сделать консоль для покупки шаттлов то используйте приложенный пример ниже. Всё что находится в“[ ]” необходимо изменить

```yml
# Консоль фракций [робастеров]
- type: entity
  id: [Robust]FractionShipyardComputer # id консоли
  parent: BaseFractionShipyardComputer  # Берёт с базового компьютера параметры
  name: верфь [робастеров] # Имя консоли
  components:
  - type: ShipyardListing # указывает какие шаттлы будут в консоли
    shuttles:
    - [ShuttleRobust] #id шаттла
    - [RobustShuttle] #id шаттл
```
### Можно также добавить компонент ShipyardConsole чтобы более глубоко отредактировать консоль
```yml
  - type: ShipyardConsole
    newJobTitle: null # Меняет ли должность после покупки шаттла
    shipyardChannel: Nfsd # Сообщение о покупке шаттла в рацию
    secretShipyardChannel: Freelance # Тайное сообщение о покупке шаттла
    newAccessLevels: [Captain, Security, Brig] # Выдаёт доступы после покупки шаттла
    taxAccounts: # Налог при продаже шаттла 
      Invalid: 0.30
    ignoreBaseSaleRate: true # Игнорирование базового налога на шаттлы
```
### Перейдем к созданию прототипов для шаттлов можете использовать приложенный пример ниже

```yml
# Информация об авторе шаттла
# GitHub: ???
# Discord: ???

- type: vessel
  id: [RobustShuttle] # id шаттла
  parent: BaseVessel
  name: NRZN [Robust Shuttle] #Имя шаттла используйте тег NRZN если шаттл для общей верфи
  description: Самый робастный шаттл на сервере # Описание шаттла
  price: 29000 # после инициализации шаттл стоил 21864, наценка верфи 30% = 28423, округляем до 29000
  category: Medium # Размер шаттла
  group: Custom # Группа шаттлов
  shuttlePath: /Maps/_Horizon/Shuttles/[robust.yml] # Путь к шаттлу
  class: # Тип шаттла
  - Cargo 
  - Salvage
  engine: # На каком двигателе работает шаттл
  - Solar
  - Plasma

- type: gameMap
  id: [RobustShuttle]
  mapName: 'NRZN [Robust Shuttle]'
  mapPath: /Maps/_Horizon/Shuttles/[robust.yml] # Путь к шаттлу
  minPlayers: 0
  stations:
    [Robust]: #тут нужно указать свой id шаттла
      stationProto: StandardFrontierVessel
      components:
        - type: StationNameSetup
          mapNameTemplate: '[Robust] {1}' # Имя шаттла которое генерируется и отображается в игре
          nameGenerator:
            !type:NanotrasenNameGenerator
            prefixCreator: '14'
        - type: StationJobs # Доступные должности на шаттле используйте только голограммные должности
          availableJobs:
            ContractorInterview: [ 0, 0 ]
            PilotInterview: [ 0, 0 ]
            MercenaryInterview: [ 0, 0 ]
```
### Тут будут указаны все категории и группы шаттлов.
```yml
  class: 
  - Capital # Авианосец
  - Detainment # Тюремный
  - Detective # Детективный
  - Fighter # Штурмовой
  - Patrol # Патрульный
  - Pursuit # Перехватчик
  - Expedition # Экспедиционный
  - Scrapyard # Мусорный
  - Salvage # Утилизаторский
  - Science # Научный
  - Cargo # Карго
  - Chemistry # Химический
  - Botany # Ботанический
  - Engineering # Инженерный
  - Atmospherics # Атмосферный
  - Mercenary # Наёмнический
  - Medical # Медицинский
  - Civilian # Гражданский
  - Kitchen # Кухонный
  - Syndicate # Синдикатовский
  - Pirate # Пиратский
  engine:
  - AME # ДАМ
  - TEG # ТЭГ
  - Supermatter # Супер материя
  - Tesla # Тесла
  - Singularity # Сингулярность
  - Solar # Солнечные панели
  - RTG # РИТЭГ
  - APU # ВСУ
  - Welding # Топливный генератор
  - Plasma # Плазменный генератор
  - Uranium # Урановый генератор
  - Bananium # Баниумный генератор

  category: Micro # 64 тайлов, 8 в длину и ширину
  category: Small # 256 тайлов предел, 16 в длину и ширину
  category: Medium # 1024 тайлов предел, 32 в длину и ширину
  category: Large # 2304 тайлов предел, 48 в длину и ширину
  group: Shipyard # Верфь фронтира
  group: Security # Верфь НФСД
  group: Syndicate # Верфь синдиката
  group: BlackMarket # Верфь пиратов
  group: Expedition # Верфь экспедиционной лоджи
  group: Scrap # Верфь свалки
  group: Sr # Верфь представителей фронтира
  group: Medical # Медицинская верфь
  group: Custom # Используется в материнских шаттлах или для фракций
```
### Чтобы была возможность покупки шаттла на вашем гриде то должен быть компонент<span class="tooltip" data-text="StationMember — компонент, который подключается к BecomeStation для совместной работы. Выдается автоматически после спавна грида через прототип.">`StationMember`</span>
