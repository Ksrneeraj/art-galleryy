import { useAuth } from "../auth";
import axios from 'axios'

export default function ShoppingGallery2() {
    const auth= useAuth()
    const recipientEmail = auth.mail;
    const user = auth.user;

    const handleMail = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/buyMail', {user, recipientEmail})
    }

  return (
    <div>
              <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://artist.com/photos/arts/big/bright-nature--1800359779.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={handleMail}>View options</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
