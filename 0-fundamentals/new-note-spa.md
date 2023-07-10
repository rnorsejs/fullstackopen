sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: new note json
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes