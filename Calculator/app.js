const $lis = document.querySelectorAll("ul li")

$lis.forEach((node) => {
    node.addEventListener('mousedown', function (event) {

        const $result = document.querySelector(".result")
        const value = node.innerText.trim()//no space in li items in innertext
        const resulText = $result.innerText.trim()



        console.log(value)
        if (resulText == '0' || resulText == 'Infinity' || resulText == 'undefined') {
            $result.innerText = ""
            console.log($result.innerText)

        }
        if (value == "C") {
            $result.innerText = ""

            return true
        }
        if (value == "=") {
            let solution = eval(resulText)
            $result.innerText = solution
            console.log(solution)
            return true
        }
        if (value == "back") {
            let ans = $result.innerText.slice(0, -1)
            $result.innerText = ans
            return true
        }

        $result.append(value)

    })
})