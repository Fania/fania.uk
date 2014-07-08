# Fania.uk

This is my websites code.

# Heading 1
###### Heading 6

> Blockquote *italic* **bold** **bold _italic_ bold**

* Item
- Item

1. Item 1
  1. Item 1.1
  2. Item 1.2
2. Item 2
  * Item 2.x

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

[Link](www.github.com) ~~Strikethrough~~

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported 
- [x] list syntax is required (any unordered or ordered list supported) 
- [x] this is a complete item 
- [ ] this is an incomplete item

- [ ] a bigger project
  - [ ] first subtask #1234
  - [ ] follow up subtask #4321
  - [ ] final subtask cc @mention
- [ ] a separate task
