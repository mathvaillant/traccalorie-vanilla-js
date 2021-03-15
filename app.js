// Storage controller

// Item Controller - Item and calories in local data
const ItemCtrl = (() => {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id
    this.name = name
    this.calories = calories
  }

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: 'Stake', calories: 1200 },
      { id: 1, name: 'Beef', calories: 463 },
      { id: 2, name: 'Eggs', calories: 200 },
    ],
    currentItem: null,
    totalCalories: 0,
  }

  return {
    getItems: function () {
      return data.items
    },
    logData: function () {
      return data
    },
  }
})()

// UI Controller - Showing, hidding things, getting input values
const UICtrl = (() => {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
  }

  // Public Methods
  return {
    populateItemList: (items) => {
      let html = ''
      items.forEach((item) => {
        html += `
        <li class="collection-item" id="${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`
      })
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    getSelectors: function () {
      return UISelectors
    },
  }
})()

// App ControlLer - Initial event listeners
const App = ((ItemCtrl, UICtrl) => {
  // Load event Listeners
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors()

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit)
  }

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    console.log('Add')

    e.preventDefault()
  }

  // Public methods
  return {
    init: function () {
      // Fetch items from data structure
      const items = ItemCtrl.getItems()
      // Populate list with items
      UICtrl.populateItemList(items)

      // Load event listeners
      loadEventListeners()
    },
  }
})(ItemCtrl, UICtrl)

// Initialize App
App.init()
