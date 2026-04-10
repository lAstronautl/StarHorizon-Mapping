# Исправление ошибок

### Тут будут расписаны частые причины нерабочей карты

<div class="timestamp">Довольно сырое но будет дорабатыватся<br>
</div>

## invalid
```
[ERRO] entity_deserializer: Encountered invalid EntityUid reference wile reading entity  [цифры], component: DeviceNetwork
```
Такая ошибка происходит если у вас есть мультитул подключёный к устроиствам на карте которую вы сохраняете, так что не забывайте чистить его перед сохранением!

### Фикс
Открываете yml файл карты и ищите "invalid"
Примечание: invalid который прописан в `Transform` компоненте **НЕЛЬЗЯ** удалять, это **сломает** вашу карту!!

Ищите по такому примеру:
```yml
- type: DeviceNetwork
  configurators:
  - invalid
  deviceLists:
  - 19299 # Цифры могут быть другими
```
Нужно удалить:
```yml
  configurators:
  - invalid
```
Что бы было вот так:
```yml
- type: DeviceNetwork
  deviceLists:
  - 19299 # Цифры могут быть другими
```
Далее просто повторите это с другими invalid и сохраните карту

## Апстрим момент
```
[ERRO] entity_deserializer: Missing prototype for map: [id прототипа]
[ERRO] entity_deserializer: Found missing prototypes in map file. Missing prototypes have been dumped to logs.
```
К примеру возьмём консоль синдиката
```
[ERRO] entity_deserializer: Missing prototype for map: ComputerShipyardSyndicate
[ERRO] entity_deserializer: Found missing prototypes in map file. Missing prototypes have been dumped to logs.
```
Такая ошибка происходит иза того что прототип который был на вашей карте был удалён иза чего игра просто не может его заспавнить

### Фикс

Открываем yml файл карты
В поиске ищем id прототипа который выдал ошибку (в нашем случаи консоль синдиката)

Должно найтись что то такое в примере используется "ComputerShipyardSyndicate"
```yml
- proto: ComputerShipyardSr
  entities:
  - uid: 492
    components:
    - type: Transform
      pos: 1.5,-11.5
      parent: 179
- proto: ComputerShipyardSyndicate
  entities:
  - uid: 493
    components:
    - type: Transform
      pos: 0.5,-11.5
      parent: 179
- proto: ComputerShuttle
  entities:
  - uid: 693
    components:
    - type: Transform
      pos: -2.5,3.5
      parent: 179
```
Далее можно заменить или удалить прототип
для замены достаточно поменять:
```yml
- proto: ComputerShipyardSyndicate
```
Например на:
```yml
- proto: ComputerShipyardNfsd
```
и теперь вместо синди верфи у нас будет ДШ

Но если вы хотите удалить то нужно вырезать полностью блок с синди верфью
```yml
- proto: ComputerShipyardSyndicate
  entities:
  - uid: 493
    components:
    - type: Transform
      pos: 0.5,-11.5
      parent: 179
```
Что бы осталось вот так:
```yml
- proto: ComputerShipyardSr
  entities:
  - uid: 492
    components:
    - type: Transform
      pos: 1.5,-11.5
      parent: 179
- proto: ComputerShuttle
  entities:
  - uid: 693
    components:
    - type: Transform
      pos: -2.5,3.5
      parent: 179
```
Далее сохраните карту и попробуйте её запустить