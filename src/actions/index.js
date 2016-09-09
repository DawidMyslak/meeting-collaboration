let nextWidgetId = 0

const addWidget = (widget, data) => {
  return {
    type: 'ADD_WIDGET',
    id: nextWidgetId++,
    widget,
    data
  }
}

export const addHeaderWidget = (data) => {
  return addWidget('HeaderWidget', {
    title: 'Agenda'
  });
};

export const addTodoWidget = (data) => {
  return addWidget('TodoWidget', {
    todos: [
      {
        id: 1,
        todo: 'Sprint retrospective',
        completed: true
      },
      {
        id: 2,
        todo: 'Brainstorming',
        completed: false
      },
      {
        id: 3,
        todo: 'Sprint planning',
        completed: false
      }
    ]
  });
};

export const addNoteWidget = (data) => {
  return addWidget('NoteWidget', {
    note: '**We** ~~havent\'t~~ finished the sprint!\n\n' +
    'What went good:\n' +
    '* we did this\n' +
    '* we did that\n' +
    '* and more\n' +
    '* much more!\n'
  });
};

export const addPollWidget = (data) => {
  return addWidget('PollWidget', {
    question: 'Which database should we use?',
    results: false,
    answers: [
      {
        id: 1,
        answer: 'PostgreSQL',
        votes: 2
      },
      {
        id: 2,
        answer: 'MariaDB',
        votes: 4
      },
      {
        id: 3,
        answer: 'Oracle',
        votes: 1
      }
    ]
  });
};

export const addTaskWidget = (data) => {
  return addWidget('TaskWidget', {
    task: 'Creating meeting minutes taker app',
    results: false,
    estimates: [3, 5, 8]
  });
};

export const addResourceWidget = (data) => {
  return addWidget('ResourceWidget', {
    description: 'Check this great website!',
    link: 'https://www.teamwork.com'
  });
};

export const addImageWidget = (data) => {
  return addWidget('ImageWidget', {
    image: 'https://blog.teamwork.com/wp-content/uploads/2016/08/9-Ways-Your-Remote-Team-Can-be-More-Productive.jpg'
  });
};

export const addWhiteboardWidget = (data) => {
  return addWidget('WhiteboardWidget', {
    source: 'base64,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'
  });
};
