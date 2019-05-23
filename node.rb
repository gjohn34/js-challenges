class Node
  attr_reader :value, :root, :parent, :array, :children

  def initialize(value)
    @value = value
    @children = []
  end

  def create_children()
    @left_node = Node.new(@value-1)
    @right_node = Node.new(@value+1)
    @children.push(@left_node, @right_node)
  end
end

# nodes = []
# nodes.push(Node.new(5))
# nodes.push(Node.new(10))
# nodes[0].create_children()
# nodes[1].create_children()
# nodes.each {|node|
#   puts "I am #{node.value}"
#   puts node.children}
# puts "deleting"
# nodes.pop()
# nodes.each {|node|
#   puts "I am #{node.value}"
#   puts node.children}


#sorting
nodes = []
(1..10).each do |i|
  nodes.push(Node.new(1+rand(100)))
end

puts "before sort"

nodes.each do |node|
  puts node.value
end


def bubble_sort(array)
  return array if array.size <= 1
  swapped = true
  while swapped do
    swapped = false
    0.upto(array.size-2) do |i|
      if array[i].value > array[i+1].value
        array[i], array[i+1] = array[i+1], array[i]
        swapped = true
      end
    end
  end
  array
end

bubble_sort(nodes)

puts "after sort"

nodes.each do |node|
  puts node.value
end
