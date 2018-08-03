/* var temp = [‘c’, ‘a’, ‘k’, ‘e’]

var message = [ [‘c’, ‘a’, ‘k’, ‘e’], [‘p’, ‘o’, ‘u’, ‘n’, ‘d’], [‘s’, ‘t’, ‘e’, ‘a’, ‘l’]]
=> message[i] = message[message.length - 1 -i]

var message = [[‘s’, ‘t’, ‘e’, ‘a’, ‘l’], [‘p’, ‘o’, ‘u’, ‘n’, ‘d’], [‘c’, ‘a’, ‘k’, ‘e’]]
var message = [‘s’, [‘t’, ‘e’, ‘a’, ‘l’], … ]
var message = [‘s’, ‘t’, ‘e’, ‘a’, ‘l’, ‘ ‘, ‘p’, ‘o’, ‘u’, ‘n’, ‘d’, ‘ ‘, ‘c’, ‘a’, ‘k’, ‘e’, ‘ ‘]
message = message.slice(0, message.length - 1)

O(N + N)
*/