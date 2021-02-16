'use strict';

{
    const addTasktarget = document.getElementsByClassName('addTask-target') [0];
    const addTaskvalue = document.getElementsByClassName('addTask-value') [0];
    const addTasktrigger = document.getElementsByClassName('addTask-trigger') [0];
    let id = 0;

    function addTask(task) {
        const tr = document.createElement('tr');

        // id要素を取得
        const idTd = document.createElement('td');
        idTd.innerText = id;

        // コメント要素を取得
        const TaskTd = document.createElement('td');
        TaskTd.innerText = task;

        // 状態要素を取得
        const addButtonTd = document.createElement('td')
        const addButton = document.createElement('button')
        addButton.innerText = '作業中';

        addButton.addEventListener('click', () => {
            addButton.classList.toggle('Tasknow');
        })

        //削除ボタン要素を取得
        const removeButtonTd = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.innerText = '削除';

        removeButton.addEventListener('click',() => {
            tr.remove();
        });

        addButtonTd.appendChild(addButton);
        removeButtonTd.appendChild(removeButton);

        tr.appendChild(idTd);
        tr.appendChild(TaskTd);
        tr.appendChild(addButtonTd);
        tr.appendChild(removeButtonTd);

        addTasktarget.appendChild(tr);
    };

    addTasktrigger.addEventListener('click', () => {
        if (addTaskvalue.value === "") {
            window.alert('テキストが空白です。')
            return;
        }
        id += 1;
        const task = addTaskvalue.value;
        addTask(task);
        addTaskvalue.value = '';

    });
}