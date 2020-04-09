$(document).on('click', '.btn-primary', function () {
    $(this).attr('id');
    let devoured = $(this).attr('data-devoured');
    let bool = devoured == '0' ? 1 : 0;

    $.ajax({
        method: 'PUT',
        url: '/burgers/' + $(this).attr('id'),
        data: { devoured: bool }
    }).then(data => {
        console.log(data);
        window.location.reload()
    })
})

$(document).on('click', '#submitBurger', function () {
    $.ajax({
        method: 'POST',
        url: '/burgers',
        data: { name: $("input").val() }
    }).then(data => {
        console.log(data);
        window.location.reload()
    })

})