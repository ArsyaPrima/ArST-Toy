$(document).ready(function () {
  // target = document.getElementById("prod");
  hasil = "";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "./Json/IAjax.json", true);
  xhttp.onload = function () {
    data = JSON.parse(this.response);
    data["data"].forEach((d) => {
      console.log(d);
      hasil += `<div class='col mb-5`;
      if (d["sold"]) {
        hasil += " overlay";
      }
      hasil +=
        `'>
          <div class='card h-80'>
            <div class='badge bg-dark text-white position-absolute' style='top: 0.5rem; right: 0.5rem'>Sale</div>
            <img class='card-img-top' src='` +
        d["Gambar"] +
        `' alt='...' />
            <div class='card-body p-4'>
            <div class='text-center'>
            <h5 class='fw-bolder'>` +
        d["Nama"] +
        `</h5>
            <div class='d-flex justify-content-center small text-warning mb-2'>`;
      for (let i = 1; i <= d["Bintang"]; i++) {
        hasil += `<div class='bi-star-fill'></div>`;
      }
      hasil += `</div>`;
      if (d["diskon"]) {
        hasil +=
          `<span class='text-muted text-decoration-line-through'>` +
          Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(d["HargaDiskon"]) +
          `</span> `;
      }
      hasil +=
        Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        }).format(d["Harga"]) +
        `
                    </div>
                </div>
                <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                <div class='text-center'>`;
      if (d["sold"]) {
        hasil += `<a class="btn btn-outline-dark mt-auto sold"
                            >Sold Out</a
                          >`;
      } else {
        hasil += `<a class='btn btn-outline-dark mt-auto' href='#'>Add to cart</a>`;
      }
      hasil += `</div></div>
                </div>
                </div>`;
    });
    // alert(JSON.parse(this.response));
    $("#prod").html(hasil);
  };
  xhttp.send();
});
function sort(jml) {
    hasil = "";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./Json/IAjax.json", true);
    xhttp.onload = function () {
      data = JSON.parse(this.response);
      data["data"].forEach((d) => {
        if (d["Bintang"] === jml) {
          hasil += `<div class='col mb-5`;
          if (d["sold"]) {
            hasil += " overlay";
          }
          hasil +=
            `'>
          <div class='card h-80'>
          <div class='badge bg-dark text-white position-absolute' style='top: 0.5rem; right: 0.5rem'>Sale</div>
          <img class='card-img-top' src='` +
            d["Gambar"] +
            `' alt='...' />
          <div class='card-body p-4'>
          <div class='text-center'>
          <h5 class='fw-bolder'>` +
            d["Nama"] +
            `</h5>
          <div class='d-flex justify-content-center small text-warning mb-2'>`;
          for (let i = 1; i <= d["Bintang"]; i++) {
            hasil += `<div class='bi-star-fill'></div>`;
          }
          hasil += `</div>`;
          if (d["diskon"]) {
            hasil +=
              `<span class='text-muted text-decoration-line-through'>` +
              Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(d["HargaDiskon"]) +
              `</span> `;
          }
          hasil +=
            Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(d["Harga"]) +
            `
        </div>
        </div>
              <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
              <div class='text-center'>`;
          if (d["sold"]) {
            hasil += `<a class="btn btn-outline-dark mt-auto sold"
          >Sold Out</a
          >`;
          } else {
            hasil += `<a class='btn btn-outline-dark mt-auto' href='#'>Add to cart</a>`;
          }
          hasil += `</div></div>
        </div>
        </div>`;
        }
      });
      // alert(JSON.parse(this.response));
      $("#prod").html(hasil);
    };
    xhttp.send();
  }
  