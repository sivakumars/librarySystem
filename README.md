# librarySystem
A mock implementation of library loaders- dependent on the order of library definition

### Test cases:
```javascript
librarySystem('name', [], function() {
  return 'Siva';
});

librarySystem('course', [], function() {
  return 'Javascript';
});

librarySystem('StudyBlurb', ['name', 'course'], function(name, course) {
  return name + ' studies ' + company;
});

librarySystem('StudyBlurb'); // 'Siva studies Javascript'
```
