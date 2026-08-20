# Портфолио Алексея

Портфолио, реализованное по макету Figma. Главная страница находится в `index.html`, а детальная страница кейса Аэрофлота — в `aeroflot.html`.

Общие стили детальных страниц находятся в `case.css`: этот файл задаёт шаблон заголовка, таблицы фактов и медиаблоков для следующих кейсов.


## Как открыть локально

Откройте `index.html` двойным кликом или запустите из папки проекта:

```bash
python3 -m http.server 4173
```

Затем откройте `http://localhost:4173`.

## Изображения

Реальные изображения Sleeptery уже лежат в `assets/images/`.

Для Youmin и GoodStay нужно добавить экспортированные скриншоты в `assets/images/` и заменить placeholder-блоки в `index.html`. Имена нужных файлов указаны рядом с каждым placeholder, например:

- `youmin-employees.png`
- `youmin-alternative-scenarios.webp`
- `youmin-performance-review.png`
- `goodstay-home.png`
- `goodstay-order-status.png`
- `goodstay-hotel-variants.png`

Для полноценного lightbox добавьте изображение в `.frame` с кнопкой `data-full="assets/images/имя-файла.png"` — пример уже есть в карточке Sleeptery.

## Контакты и резюме

Внизу `index.html` есть комментарии `TODO` для замены email, Telegram, HH / LinkedIn и ссылки на PDF-резюме. В hero есть ещё одна ссылка «Скачать резюме».

## Публикация

### GitHub Pages

Создайте репозиторий, загрузите содержимое этой папки, затем в Settings → Pages выберите ветку `main` и папку `/ (root)`.

### Netlify

Откройте Netlify Drop и перетащите эту папку либо подключите GitHub-репозиторий. Сборка не нужна: это статический сайт.
