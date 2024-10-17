-- This is a single-line comment

-- Function to add two numbers
function add(a, b)
    return a + b
end

-- Using the function
local result = add(5, 10)

-- Table (similar to dictionaries in other languages)
local colors = {
    red = "FF0000",
    green = "00FF00",
    blue = "0000FF"
}

-- Loop through the colors table
for color, code in pairs(colors) do
    print(color .. ": " .. code) -- Concatenation of strings
end

-- Conditional statement
if result > 10 then
    print("Result is greater than 10")
else
    print("Result is 10 or less")
end

-- Using a coroutine
local co = coroutine.create(function()
    for i = 1, 5 do
        print("Coroutine iteration: " .. i)
        coroutine.yield() -- Yielding execution
    end
end)

-- Resuming the coroutine
for i = 1, 5 do
    coroutine.resume(co)
end
