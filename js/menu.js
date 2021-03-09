var special_attribute_boxes = document.querySelectorAll('.special-attribute-box');
var special_attribute_descriptions = document.querySelectorAll('.special-attribute-description');
var perk_attribute_boxes = document.querySelectorAll('.perk-attribute-box');
var perk_attribute_descriptions = document.querySelectorAll('.perk-attribute-description');

var special_attribute_names = ['strength', 'perception', 'endurance',
    'charisma', 'intelligence', 'agility', 'luck'];
var perk_attribute_names = ['p1', 'p2'];


function activeBox(box, boxes, attribute_names, box_class_basename, active_box_class) {
    for (var i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }

    for (var i=0 ; i < special_attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + special_attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + special_attribute_names[i]).
            classList.add(active_box_class);
        }
    }
}


function changeDescription(box, descriptions, attribute_names, box_class_basename,
    description_class_basename, active_description_class) {
    for (var i=0 ; i < descriptions.length ; i++) {
        descriptions[i].classList.remove(active_description_class);
    }

    for (var i=0 ; i < special_attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + special_attribute_names[i] + '') {
            document.getElementById(description_class_basename + '-' + special_attribute_names[i]).
            classList.add(active_description_class);
        }
    }
}


// processing execution when a mouseover is detected on a attribute box
for (var i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        // SPECIAL PAGE
        activeBox(this, special_attribute_boxes, special_attribute_names,
            'special-attribute-box',
            'special-attribute-box-active');
        changeDescription(this, special_attribute_descriptions, special_attribute_names,
            'special-attribute-box',
            'special-attribute-description',
            'special-attribute-description-active');
        // PERK PAGE
        activeBox(this, perk_attribute_boxes, perk_attribute_names,
            'perk-attribute-box',
            'perk-attribute-box-active');
        changeDescription(this, perk_attribute_descriptions, perk_attribute_names,
            'perk-attribute-box',
            'perk-attribute-description',
            'perk-attribute-description-active');
    })
}