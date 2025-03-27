<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Application-Web-Design

### Diego Azael Vázquez Carrizales
#### 30030126

### Mario Eduardo Rodríguez Palafox

## Opciones de etiquetado de Markdown

- ## Tenemos los encabezados
    - ### Estos se representan con "#", dependiendo la cantidad de estos es el encabezado que tendrá, uno solo de estos "#" es encabzado 1 y asi con tdos hasta el 6
- ## Estilo de texto
    - ### Negritas, para representar una letra con estilo negrita utilizamos dos asteriscos antes y después pegados a la palabra asi: " ** " Hola " ** ".
    - ### Itálica, para letras con estilo itálca es con un solo asterisco " * " Hola " * ".
    - ### Tachado, para tachar una palabra tenemos que usar este simbolo dos veces antes y después "~" .
- ## Listas
    - ### Tenemos diferentes listas, una es poner este simbolo " - ", otra es con numero asi " 1. ".
- ## Citas
    - ### Para usar citas tenemos qu eusar este simbolo " > ", usarlo una vez es una cita normal y usarlo 2 veces de manera seguida es para una cita anidada


## Lista de comandos más utilizados en Git

1. ## Configuración inicial
    - ### git config --global user.name "Tu Nombre" → Configura el nombre del usuario.
    - ### git config --global user.email "tuemail@example.com" → Configura el correo del usuario.
    - ### git config --global core.editor "nombre_editor" → Configura el editor de texto predeterminado.
    - ### git config --list → Muestra la configuración de Git.

2. ## Inicialización y Clonación
    - ### git init → Inicializa un repositorio Git en un directorio.
    - ### git clone <URL> → Clona un repositorio remoto a la máquina local.

3. ## Estado y Registro
    - ### git status → Muestra el estado del repositorio (archivos modificados, en staging, sin seguimiento).
    - ### git log → Muestra el historial de commits.
    - ### git log --oneline --graph → Muestra el historial de commits de manera compacta y visual.
    - ### git show <hash> → Muestra los detalles de un commit específico.

4. ## Seguimiento y Confirmación de Cambios
    - ### git add <archivo> → Agrega un archivo al área de staging.
    - ### git add . → Agrega todos los archivos modificados al área de staging.
    - ### git commit -m "Mensaje del commit" → Confirma los cambios en el repositorio.
    - ### git commit --amend -m "Nuevo mensaje" → Modifica el último commit.

5. ## Trabajando con Ramas (Branches)
    - ### git branch → Muestra la lista de ramas en el repositorio.
    - ### git branch <nombre_rama> → Crea una nueva rama.
    - ### git checkout <nombre_rama> → Cambia a una rama específica.
    - ### git switch <nombre_rama> → Cambia a una rama específica (alternativa moderna a checkout).
    - ### git checkout -b <nombre_rama> → Crea y cambia a una nueva rama.
    - ### git switch -c <nombre_rama> → Alternativa moderna para crear y cambiar a una nueva rama.
    - ### git merge <nombre_rama> → Fusiona una rama con la actual.
    - ### git branch -d <nombre_rama> → Elimina una rama.

6. ## Sincronización con Repositorio Remoto
    - ### git remote add origin <URL> → Asocia el repositorio local con un remoto.
    - ### git remote -v → Lista los repositorios remotos configurados.
    - ### git fetch → Descarga cambios del repositorio remoto sin fusionarlos.
    - ### git pull → Descarga y fusiona cambios del repositorio remoto.
    - ### git push origin <rama> → Envía los cambios al repositorio remoto.
    - ### git push -u origin <rama> → Envía cambios y establece la rama en seguimiento.

7. ## Deshacer Cambios
    - ### git reset <archivo> → Elimina un archivo del área de staging.
    - ### git reset --hard <hash> → Regresa el repositorio a un commit anterior, descartando cambios.
    - ### git revert <hash> → Crea un nuevo commit que revierte los cambios de un commit anterior.
    - ### git checkout -- <archivo> → Descarta los cambios no confirmados en un archivo.

8. ## Stash (Guardar Cambios Temporalmente)
    - ### git stash → Guarda los cambios sin confirmar en un área temporal.
    - ### git stash list → Muestra los stashes guardados.
    - ### git stash pop → Restaura el stash más reciente y lo elimina de la lista.
    - ### git stash apply → Aplica el stash sin eliminarlo.
    - ### git stash drop → Elimina un stash específico.

9. ## Etiquetas (Tags)
    - ### git tag → Muestra las etiquetas del repositorio.
    - ### git tag -a v1.0 -m "Versión 1.0" → Crea una nueva etiqueta anotada.
    - ### git push origin --tags → Sube las etiquetas al repositorio remoto.

10. ## Revisión de Diferencias
    - ### git diff → Muestra las diferencias entre archivos modificados y la última confirmación.
    - ### git diff --staged → Muestra las diferencias entre archivos en staging y la última confirmación.

11. ## Borrado y Restauración de Archivos
    - ### git rm <archivo> → Elimina un archivo del repositorio y del disco.
    - ### git mv <archivo> <nuevo_nombre> → Renombra un archivo.
>>>>>>> 23bd35e828965ae7f945819b59198433690e031c
