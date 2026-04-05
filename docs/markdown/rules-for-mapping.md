# Правила маппинга
### Большинство из пунктов важны но так же бывают и исключения
## Маппинг шаттлов

1. <span class="tooltip"><u>Убедитесь, что на вашем судне установлены скрубберы которые выводят газы в космос (все генераторы выбрасывают CO2).</u><span class="tooltip-img"><img src="../assets/images/atmos.png"></span></span>
2. <span class="tooltip"><u>Раскрасьте кислородные/скруббер трубы в их цвета.</u><span class="tooltip-img"><img src="../assets/images/pipe-color.png"></span></span>
3. <span class="tooltip"><u>На шаттле должно быть:</u><span class="tooltip-img"><img src="../assets/images/allow-item.png"></span></span>
    1. Факс.  
    2. Консоль станционного учёта. (если на шаттле есть должности)  
    3. Варп точка.  
    4. “Спавн позднее присоединение”.  
    5. Голопад.
    7. Гироскоп.  
    8. Мини генератор гравитации.
    10. Генераторы (используйте для шаттлов) и один шкаф с топливом  
    11. СМЭС, подстанции и ЛКП.
4. <span class="tooltip"><u>Используйте двухступенчатые шлюзы (например, стыковочный шлюз \+ красные шлюзы).</u><span class="tooltip-img"><img src="../assets/images/gateway.png"></span></span>
5. <span class="tooltip"><u>Разместите направленные вентиляторы на шлюзы которые выходят в космос.</u><span class="tooltip-img"><img src="../assets/images/directional-fan.png"></span></span>
7. <span class="tooltip"><u>Двигатели должны быть доступны (в случае ЭМИ атак или модернизации).</u><span class="tooltip-img"><img src="../assets/images/thruster.png"></span></span>
8. <span class="tooltip"><u>Ваша проводка должна быть логичной и минимальной.</u><span class="tooltip-img"><img src="../assets/images/allow-item.png"></span></span>
9. <span class="tooltip"><u>На шаттле <strong>не</strong> должно быть индивидуально заполненных шкафчиков (используйте уже имеющиеся)</u><span class="tooltip-img"><img src="../assets/images/custom-loot.png"></span></span>
10. Выполните команды <span class="tooltip" data-text="variantize [grid id] - Рамдомизирует спрайты тайлов на гриде"><u><code>variantize</code></u></span> и <span class="tooltip" data-text="fixgridatmos [grid id] - Создаёт атмосферу на шаттле"><u><code>fixgridatmos</code></u></span> на гриде шаттла
11. <span class="tooltip"><u>На шаттле <strong>не</strong> должны быть POI вендоматы или машины.</u><span class="tooltip-img"><img src="../assets/images/block-item.png"></span></span>
12. <span class="tooltip" data-text="savegrid [grid id] [Путь] - Позволяет сохранить карту как грид для коректного спавна"><u>Сохраните свой шаттл как грид, а не как карту.</u></span>
13. <span class="tooltip"><u>Шаттл должен быть не меньше 20 тайлов или не больше 2304 и так же не должен выходить по размерам из своей категории<</u><span class="tooltip-img"><img src="../assets/images/mini-shuttle.png"></span></span>
15. <span class="tooltip"><u>Единственное, что можно установит на окнах, это неоновые вывески, ставни и гермозатвор.</u><span class="tooltip-img"><img src="../assets/images/signs.png"></span></span>
16. <span class="tooltip"><u>Не переименовывайте варп поинты, игра сама даёт им имя.</u><span class="tooltip-img"><img src="../assets/images/no-rename.png"></span></span>
17. <span class="tooltip"><u>Не пишите имя каких то персонажей в заметках на корабле.</u><span class="tooltip-img"><img src="../assets/images/no-name.png"></span></span>
18. <span class="tooltip"><u>Экспедиционные корабли должны использовать ДАМ и должны иметь минимальную цену в 50 000 кредитов.</u><span class="tooltip-img"><img src="../assets/images/ame.png"></span></span>
19. <span class="tooltip"><u>Шаттл <strong>НЕ</strong> должен использовать закрытые шлюзы, все шлюзы на шаттлах должны быть <strong>БЕЗ</strong> доступов</u><span class="tooltip-img"><img src="../assets/images/acces-lock.png"></span></span>
20. <span class="tooltip"><u>На шаттле должно быть аварийное снаряжение:</u><span class="tooltip-img"><img src="../assets/images/emergency-equipment.png"></span></span>
    1. Дефибриллятор.
    2. Огнетушитель.
    3. Шкаф со скафандром (можно и аварийный).
21. <span class="tooltip"><u>На шаттле **не** должно быть:</u><span class="tooltip-img"><img src="../assets/images/block-item.png"></span></span>
    1. Газодобытчики.  
    2. РИТЭГи (сломанные или исправные).  
    3. Любые источники энергии, не потребляющие топливо (за исключением солнечных панелей).
    5. Любое огнестрельное оружие.  
    6. Избыточные материалы (слишком много стали или стекла).

---

* <span class="tooltip"><u>Не размещайте перпендикулярно стены или окна</u><span class="tooltip-img"><img src="../assets/images/diagonal-no.png"></span><span class="tooltip-img"><img src="../assets/images/diagonal-yes.png"></span></span>
  * Особое внимание следует уделить планировке помещений на корабле, а также стенам и диагональным объектам. Например, крайне не рекомендуется размещать двери на перпендикулярных стенах прямо в углах. В некоторых небольших и компактных проектах это необходимо, но по возможности следует избегать этого.
  * Диагональные или наклонные окна и стены также требуют особого внимания. У них нету компонента теней, что позволяет смотреть сквозь них, и использование диагональных стен или окон без стен запрещено.

* <span class="tooltip"><u>Не забывайте про пожарные и воздушние сигнализации.</u><span class="tooltip-img"><img src="../assets/images/firelock.png"></span></span>
  * Старайтесь размещать на шаттлах пожарный шлюзы, пожарные сигнализации, воздушные сигнализации, сенсоры воздуха и не забудьте их подключить.  

* <span class="tooltip"><u>Ваш шаттл должен быть задекорирован.</u><span class="tooltip-img"><img src="../assets/images/decals.png"></span></span>
  * Не забывайте про декали, плакаты и другие способы декораций шаттлов.

* <span class="tooltip"><u>Для некоторых шаттлов нужен быстрый доступ в космос.</u><span class="tooltip-img"><img src="../assets/images/blast-door-no.png"></span><span class="tooltip-img"><img src="../assets/images/blast-door-yes.png"></span></span>
  * Для таких шаттлов как утилизатоские, медицинские и инженерные нужен быстрый доступ в космос вы можете использовать направленные вентиляторы и гермозатворы чтобы оказать быстрый доступ в космос.

* <span class="tooltip"><u>Окна.</u><span class="tooltip-img"><img src="../assets/images/windows.png"></span></span>
  * Окна не должны быть слишком большими (не больше 4 тайлов)
  * Кроме того, под всеми окнами должны быть установлены решетки для обеспечения единообразия стиля.
  * Также не используйте тайловые решетки под окнами

* <span class="tooltip"><u>Компоненты.</u><span class="tooltip-img"><img src="../assets/images/becomesstation.png"></span></span>
  * На гриде вашего шаттла должен быть добавлен компонент BecomesStation.
  * В самом компоненте укажите id вашего шаттла.

* <span class="tooltip"><u>Устройства антагонистов</u><span class="tooltip-img"><img src="../assets/images/fax.png"></span></span>
  * Если ваш шаттл сделан для антагонистов то используйте специальный голопад NFHolopadShipAntag и факс FaxMachineShipAntag антагонистов.
  * Данное правило не относится к синдикатовской консоли опознания, её ставить запрещено.

* <span class="tooltip"><u>Наименование гридов</u><span class="tooltip-img"><img src="../assets/images/name-grid.png"></span></span>
  * Не используйте имя grid для шаттла, старайтесь всегда переименовывать грид в имя вашего шаттла чтобы не было проблем при ручном спавне.