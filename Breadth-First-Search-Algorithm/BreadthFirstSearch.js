// The object below represents the binary tree jpg in the Resources folder...
let tree = {
    "10": {
        value: "10",
        left: "4",
        right: "17",
    },
    "4": {
        value: "4",
        left: "1",
        right: "9",
    },
    "17": {
        value: "17",
        left: "12",
        right: "18",
    },
    "1": {
        value: "1",
        left: null,
        right: null,
    },
    "9": {
        value: "9",
        left: null,
        right: null,
    },
    "12": {
        value: "12",
        left: null,
        right: null,
    },
    "18": {
        value: "18",
        left: null,
        right: null,
    },
};


let BreadthFirstSearch = (tree, rootNode, searchValue) => {
    // make a queue array
    let queue = [];
    // populate it with the node that will be the root of your search
    queue.push(rootNode);

    // search the queue until it is empty
    while (queue.length > 0) {
        // assign the top of the queue to variable currentNode
        let currentNode = queue[0];
        console.log("Current node is:" + currentNode.value);

        // if currentNode is the node we're searching for, break & alert
        if (currentNode.value === searchValue) {
            console.log("Found it!");
            return;
        }

        // if currentNode has a left child node, add it to the queue.
        if (currentNode.left !== null) {
            queue.push(tree[currentNode.left]);
        }

        // if currentNode has a right child node, add it to the queue.
        if (currentNode.right !== null) {
            queue.push(tree[currentNode.right]);
        }
        // remove the currentNode from the queue.
        queue.shift();
    }
    console.log("Sorry, no such node found :(");
}

// ----------------------------------------------------------------------------------------------
// The Data...
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(" ");

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

// The Graph...
const adjacenyList = new Map();

// Add a Node...
function addNode(airport) {
    // the empty array represents the routes/connections; at the start, it starts as empty...
    adjacenyList.set(airport, []);
}

// Add unweighed edge (connections between nodes with no value attached to the edge connection) that are undirected (two-way), not directed (one-way between connections)...
function addEdge(origin, destination) {
    adjacenyList.get(origin).push(destination);
    adjacenyList.get(destination).push(origin);
}

// Create the Graph...
airports.forEach(airport => addNode(airport));
routes.forEach(route => addEdge(route[0], route[1]));

console.log(adjacenyList);
