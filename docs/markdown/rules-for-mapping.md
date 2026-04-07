# Правила маппинга
### Большинство из пунктов важны но так же бывают и исключения

<div class="timestamp">Уточнение по шаттлам которые были сделаны до обновления правил и одобреные.<br>
Они могут игнорировать новые пункты правил если нету грубейших нарушений.<br>
</div>

## Маппинг шаттлов

1. <span class="tooltip">Убедитесь, что на вашем судне установлены скрубберы которые выводят газы в космос (все генераторы выбрасывают CO2).<span class="tooltip-img"><img src="../assets/images/atmos.png"></span></span>
2. <span class="tooltip">Раскрасьте кислородные/скруббер трубы в их цвета.<span class="tooltip-img"><img src="../assets/images/pipe-color.png"></span></span>
3. <span class="tooltip">На шаттле должно быть:<span class="tooltip-img"><img src="../assets/images/allow-item.png"></span></span>
    1. Факс.  
    2. Консоль станционного учёта. (если на шаттле есть должности)  
    3. Варп точка.  
    4. “Спавн позднее присоединение”.  
    5. Голопад.
    7. Гироскоп.  
    8. Мини генератор гравитации.
    10. Генераторы (используйте для шаттлов) и один шкаф с топливом  
    11. СМЭС, подстанции и ЛКП.
4. <span class="tooltip">Используйте двухступенчатые шлюзы (например, стыковочный шлюз \+ красные шлюзы).<span class="tooltip-img"><img src="../assets/images/gateway.png"></span></span>
5. <span class="tooltip">Разместите направленные вентиляторы на шлюзы которые выходят в космос.<span class="tooltip-img"><img src="../assets/images/directional-fan.png"></span></span>
7. <span class="tooltip">Двигатели должны быть доступны (в случае ЭМИ атак или модернизации).<span class="tooltip-img"><img src="../assets/images/thruster.png"></span></span>
8. <span class="tooltip">Ваша проводка должна быть логичной и минимальной.<span class="tooltip-images-container"><span class="tooltip-img"><img src="../assets/images/cables-no.png"></span><span class="tooltip-img"><img src="../assets/images/cables-yes.png"></span></span></span>
9. <span class="tooltip">На шаттле <strong>не</strong> должно быть индивидуально заполненных шкафчиков (используйте уже имеющиеся)<span class="tooltip-images-container"><span class="tooltip-img"><img src="../assets/images/over-loot.png"></span><span class="tooltip-img"><img src="../assets/images/custom-loot.png"></span></span></span>
10. Выполните команды <span class="tooltip" data-text="variantize [grid id] - Рамдомизирует спрайты тайлов на гриде"><code>variantize</code></span> и <span class="tooltip" data-text="fixgridatmos [grid id] - Создаёт атмосферу на шаттле"><code>fixgridatmos</code></span> на гриде шаттла
11. <span class="tooltip">На шаттле <strong>не</strong> должны быть POI вендоматы или машины.<span class="tooltip-img"><img src="../assets/images/block-item.png"></span></span>
12. <span class="tooltip" data-text="savegrid [grid id] [Путь] - Позволяет сохранить карту как грид для коректного спавна">Сохраните свой шаттл как грид, а не как карту.</span>
13. <span class="tooltip">Шаттл должен быть не меньше 20 тайлов или не больше 2304 и так же не должен выходить по размерам из своей категории<span class="tooltip-img"><img src="../assets/images/mini-shuttle.png"></span></span>
14. <span class="tooltip">Единственное, что можно установит на окнах, это неоновые вывески, ставни и гермозатвор.<span class="tooltip-img"><img src="../assets/images/signs.png"></span></span>
15. <span class="tooltip">Не переименовывайте варп поинты, игра сама даёт им имя.<span class="tooltip-img"><img src="../assets/images/no-rename.png"></span></span>
16. <span class="tooltip">Не пишите имя каких то персонажей в заметках на корабле.<span class="tooltip-img"><img src="../assets/images/no-name.png"></span></span>
17. <span class="tooltip">Экспедиционные корабли должны использовать ДАМ и должны иметь минимальную цену в 50 000 кредитов.<span class="tooltip-img"><img src="../assets/images/ame.png"></span></span>
18. <span class="tooltip">Шаттл <strong>НЕ</strong> должен использовать закрытые шлюзы, все шлюзы на шаттлах должны быть <strong>БЕЗ</strong> доступов<span class="tooltip-img"><img src="../assets/images/acces-lock.png"></span></span>
19. <span class="tooltip">На шаттле должно быть аварийное снаряжение:<span class="tooltip-img"><img src="../assets/images/emergency-equipment.png"></span></span>
    1. Дефибриллятор.
    2. Огнетушитель.
    3. Шкаф со скафандром (можно и аварийный).
20. <span class="tooltip">На шаттле **не** должно быть:<span class="tooltip-img"><img src="../assets/images/block-item.png"></span></span>
    1. Газодобытчики.  
    2. РИТЭГи (сломанные или исправные).  
    3. Любые источники энергии, не потребляющие топливо (за исключением солнечных панелей).
    4. Любое огнестрельное оружие.
    5. Избыточные материалы (слишком много стали или стекла).

---

* <span class="tooltip">Не размещайте перпендикулярно стены или окна<span class="tooltip-images-container"><span class="tooltip-img"><img src="../assets/images/diagonal-no.png"></span><span class="tooltip-img"><img src="../assets/images/diagonal-yes.png"></span></span></span>
  * Особое внимание следует уделить планировке помещений на корабле, а также стенам и диагональным объектам. Например, крайне не рекомендуется размещать двери на перпендикулярных стенах прямо в углах. В некоторых небольших и компактных проектах это необходимо, но по возможности следует избегать этого.
  * Диагональные или наклонные окна и стены также требуют особого внимания. У них нету компонента теней, что позволяет смотреть сквозь них, и использование диагональных стен или окон без стен запрещено.

* <span class="tooltip">Не забывайте про пожарные и воздушние сигнализации.<span class="tooltip-img"><img src="../assets/images/firelock.png"></span></span>
  * Старайтесь размещать на шаттлах пожарный шлюзы, пожарные сигнализации, воздушные сигнализации, сенсоры воздуха и не забудьте их подключить.

* <span class="tooltip">Орудия шаттлов<span class="tooltip-img"><img src="../assets/images/weapon-shuttle.png"></span></span>
  * Разрешено использование **ТОЛЬКО** ванильных орудий для шаттлов в этот перечень входит EXP-2100g "Дастер", EXP-320g "Дружба", LSE-1200c "Перфоратор", LSE-400c "Пулемёт Свалинн", пушка пиратского шаттла
  * Учтите что EXP-2100g "Дастер" и EXP-320g "Дружба" Должны содержать только **НЕЛЕТАЛЬНЫЕ** боеприпасы
  * Так же орудия разрешены **ТОЛЬКО** для шаттлов верфи Пиратов, Синдикат и ДШ  

* <span class="tooltip">Вспомогательная силовая установка (ВСУ)<span class="tooltip-img"><img src="../assets/images/APC.png"></span></span>
  * ВСУ разрешён **ТОЛЬКО** Для шаттлов верфи ДШ и Синдикат и только если шаттл размером микро

* <span class="tooltip">Ваш шаттл должен быть задекорирован.<span class="tooltip-img"><img src="../assets/images/decals.png"></span></span>
  * Не забывайте про декали, плакаты и другие способы декораций шаттлов.

* <span class="tooltip">Для некоторых шаттлов нужен быстрый доступ в космос.<span class="tooltip-images-container"><span class="tooltip-img"><img src="../assets/images/blast-door-no.png"></span><span class="tooltip-img"><img src="../assets/images/blast-door-yes.png"></span></span></span>
  * Для таких шаттлов как утилизатоские, медицинские и инженерные нужен быстрый доступ в космос вы можете использовать направленные вентиляторы и гермозатворы чтобы оказать быстрый доступ в космос.

* <span class="tooltip">Окна.<span class="tooltip-img"><img src="../assets/images/windows.png"></span></span>
  * Окна не должны быть слишком большими (не больше 4 тайлов)
  * Кроме того, под всеми окнами должны быть установлены решетки для обеспечения единообразия стиля.
  * Также не используйте тайловые решетки под окнами

* <span class="tooltip">Компоненты.<span class="tooltip-img"><img src="../assets/images/becomes-station.png"></span></span>
  * На гриде вашего шаттла должен быть добавлен компонент BecomesStation.
  * В самом компоненте укажите id вашего шаттла.

* <span class="tooltip">Устройства антагонистов<span class="tooltip-img"><img src="../assets/images/fax.png"></span></span>
  * Если ваш шаттл сделан для антагонистов то используйте специальный голопад NFHolopadShipAntag и факс FaxMachineShipAntag антагонистов.
  * Данное правило не относится к синдикатовской консоли опознания, её ставить запрещено.

* <span class="tooltip">Наименование гридов<span class="tooltip-img"><img src="../assets/images/name-grid.png"></span></span>
  * Не используйте имя grid для шаттла, старайтесь всегда переименовывать грид в имя вашего шаттла чтобы не было проблем при ручном спавне.