export default function Blog() {
    return (
    <h1>В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

    display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
    display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
    grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
    grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
    grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
    Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.В HTML-разметке писать что-то дополнительно не нужно – достаточно задать класс, к которому будут применяться стили, поэтому разберем подробно, какие свойства были написаны в CSS и за что они отвечают:

display: grid. Отвечает за превращение родительского элемента в грид-контейнер. Теперь к нему и вложенным компонентам можно применять другие grid-стили. По умолчанию у контейнера будет такое же поведение, как и у любого блочного элемента. Вы можете изменить его, приписав соответствующую приставку, например, display: inline-grid. В таком случае будет создан строчный грид-контейнер с соответствующим поведением.
display: subgrid. Этого свойства не было в примере выше, но его тоже стоит рассмотреть. Оно отвечает за создание подсетки, например, внутри вложенного элемента.
grid-template-rows: 1fr 1fr 1fr. Задает размер рядов в grid-системе и их позиционирование. Единица измерения fr позволяет подстраивать размер ячеек под контент внутри них и внешние элементы, плюс, учитывать дополнительные условия. В нашем примере пространство распределяется равномерно, но вы можете сделать так, чтобы какой-то конкретной ячейке давалось больше пространства, указав не 1fr, а 2. Кстати, тут можно указывать и нецелые значения – 4.5, 5.2 и подобные. Если по каким-то причинам не подходит единица измерения fr, то можно указать %, em или даже фиксированную величину в пикселях, однако fr дает наилучший результат.
grid-template-columns: 1fr 1fr 1fr. Аналогично с предыдущим пунктом, но только здесь задается размер колонок.
grid-gap: 2vw. Задает отступы между колонками сверху, снизу и по бокам. Единицы измерения тоже можно задать любые – хоть %, хоть пиксели. Если нужно задать отступ сбоку, то используйте свойство grid-row-gap, а если сверху и снизу, то grid-column-gap.
Это были основные параметры, отвечающие за позиционирование грид-сетки. Для 80% задач, выполняемых средним верстальщиком, их будет достаточно. Второй блок кода в примере отвечает за стилизацию ячеек. Ничего, связанного с Grid Layout в нем нет.</h1>

    
    )
}