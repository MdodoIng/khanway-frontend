$().ready(function () {
    $("#alertStart").click(function () {
        Swal.fire({
            icon: 'success',
            title: '민팅이 완료되었습니다.',
            text: 'My NFW 페이지에서 확인 안내메세지',
        });
    });
});

$().ready(function () {
    $("#alertStart2").click(function () {
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
            });
        }
        });
    });
});


$().ready(function () {
    $("#confirmStart").click(function () {
        Swal.fire({
            title: '정말로 그렇게 하시겠습니까?',
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '승인',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '승인이 완료되었습니다.',
                    '화끈하시네요~!',
                    'success'
                )
            }
        })
    });
});            


$().ready(function () {
    $("#alertStart3").click(function () {
        Swal.fire("SweetAlert2 is working!");
    });
});            


$().ready(function () {
    $("#imgalert").click(function () {Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://images.france.fr/zeaejvyq9bhj/6zZgb2mM7S1IcqCrxIF5Yq/bbe5a77ff91dadbc98091cab0525647d/kr_france_fr____________________-039__1_.png?w=1120&h=490&q=70&fl=progressive&fit=fill",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    });
});            



