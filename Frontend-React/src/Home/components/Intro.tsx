//react modules
import React from "react";
//react components
import IntroLink from "./IntroLink";
import IntroInfo from "./IntroInfo";

//Intro function render
function Intro() {


    return (
        <div style={{"width": "50%"}} className="mx-auto">

            <ul class="nav nav-tabs justify-content-center my-5" id="myTab" role="tablist">

                <IntroLink name="Home" active={true} />

                <IntroLink name="As" active={false} />

                <IntroLink name="Poke" active={false} />

            </ul>
                
            <div className="tab-content center-text mx-auto" id="myTabContent">
                
                <IntroInfo name="Home" active={true} content="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor hendrerit finibus. Nunc at porttitor velit. Praesent faucibus, nunc sed rhoncus pretium, turpis ipsum scelerisque metus, consectetur luctus eros nunc sagittis ante. Nam eget faucibus sem. Donec at ligula et lacus hendrerit finibus semper cursus orci. Curabitur eu sem at tortor iaculis gravida eu ut eros. Vestibulum fringilla justo at dolor mattis eleifend nec eget mi. Donec sollicitudin quis mi vel fermentum. Proin auctor imperdiet nisi.

Aliquam rhoncus finibus hendrerit. Quisque eget semper tortor, vitae egestas mi. Pellentesque dapibus libero vel nulla gravida congue. Duis ultricies diam pharetra felis placerat facilisis. Nulla nec ullamcorper neque. Praesent suscipit velit ut purus ullamcorper varius. Aliquam sed nunc mi. Nunc aliquam sit amet risus id suscipit. Sed venenatis maximus faucibus. Proin eget lacus porttitor, hendrerit turpis nec, ultricies mi. Donec felis odio, tempor vitae sapien suscipit, varius iaculis justo. Mauris fringilla, ante id molestie vulputate, augue odio sollicitudin lectus, vitae ornare neque arcu tincidunt felis. Nunc magna tellus, eleifend quis turpis vitae, condimentum posuere lorem. Ut et sagittis ante. Aliquam nec posuere erat, vel aliquam mauris. In sit amet ex purus.

Nullam malesuada quam non ipsum ultrices pretium. Quisque feugiat facilisis orci sit amet accumsan. Morbi aliquam lectus lorem, non sollicitudin urna bibendum a. Nam venenatis dictum nisl. Mauris luctus congue velit, vitae ultricies est accumsan in. Pellentesque posuere, turpis vel pretium facilisis, orci lorem dignissim justo, ac condimentum lorem ligula non dui. Cras id iaculis lacus. Fusce pellentesque, neque quis semper bibendum, dui purus gravida lectus, accumsan euismod erat nibh eget felis. Praesent at accumsan odio. Sed ut ultricies nulla. Vivamus at enim varius, venenatis turpis non, tempus eros. Vestibulum ultricies sed magna eget aliquam.

Pellentesque ac arcu magna. Duis hendrerit tempor risus. Nullam lacinia magna a ligula convallis ornare. In lobortis, lectus a vestibulum pharetra, massa sapien rutrum massa, sed fermentum ligula urna ut leo. Sed ac aliquet ligula, nec bibendum dui. Morbi vitae velit venenatis, vehicula tortor et, iaculis lacus. Vestibulum gravida, enim eu feugiat molestie, elit lacus maximus est, eu dictum leo neque at dolor. Ut condimentum quis diam id tincidunt. Mauris at pulvinar arcu. Suspendisse commodo rutrum urna sed molestie. Etiam aliquet leo eu consequat porta.

Nulla et nibh feugiat, vulputate libero et, finibus metus. Mauris in massa vel turpis rhoncus iaculis. Sed accumsan vulputate enim, eu mattis felis condimentum quis. Mauris vulputate cursus ullamcorper. Cras eleifend dignissim dui, vitae scelerisque purus ullamcorper nec. Duis tincidunt dictum mattis. Curabitur scelerisque ut odio non pellentesque. Curabitur vitae magna id ipsum faucibus tristique id eget arcu. Cras id dolor a neque tempus luctus. Sed sollicitudin suscipit justo, in lobortis leo. Nunc placerat risus ut lorem finibus euismod.

Nam lacinia erat elementum varius consectetur. Quisque non dolor dapibus lorem consequat auctor eget ac sem. Nunc in mattis quam, a consequat nibh. Nulla vitae fermentum tellus. Curabitur a tristique leo. Aliquam eu tempor tortor. Donec id elementum orci, sed bibendum ligula. Sed vehicula imperdiet leo.

Maecenas enim urna, tristique at nulla ut, suscipit tempus sem. Ut justo nulla, sodales in laoreet non, pharetra eu tortor. Fusce quis diam sagittis libero iaculis aliquam. Curabitur nibh magna, venenatis sed ipsum ac, pharetra pellentesque mi. Duis dictum ipsum nibh. Aliquam fermentum orci mauris, quis dignissim velit accumsan blandit. Proin fringilla non quam eget faucibus. Duis nec nisi nec quam mattis venenatis scelerisque ut leo. Proin porttitor magna vel mauris iaculis tempor. Proin iaculis diam risus, a accumsan nibh ornare eu. Curabitur aliquam dui lacus, sit amet tincidunt sapien molestie ac. Aliquam fringilla velit nisl, id dignissim nisl egestas a. Integer vel tortor eget nunc pellentesque congue.

Etiam ac faucibus est, id sagittis arcu. Sed id pellentesque leo. Curabitur ultrices enim ac lorem interdum tincidunt. Nulla facilisi. Sed sapien ipsum, aliquam sed arcu ac, bibendum laoreet dui. Phasellus rutrum augue dui, eu maximus leo rhoncus ut. Ut consectetur, est in convallis auctor, ipsum ipsum aliquet nunc, in tempus eros enim ac diam. Phasellus vestibulum lectus vel urna euismod, sed malesuada nisi molestie. Donec faucibus tellus et nibh tempor, vel finibus enim ultrices. Nunc viverra nisi a leo tincidunt, et tempor ligula rhoncus. Vivamus eget convallis tellus, et porttitor erat.

Sed fermentum ullamcorper imperdiet. Nulla lectus nulla, hendrerit eget auctor eget, auctor a erat. Curabitur ut accumsan metus, et porta ex. Duis eu risus sed enim egestas convallis. Quisque congue urna vitae lectus dictum rhoncus. Phasellus dapibus velit at erat euismod venenatis. Curabitur viverra leo ac cursus rutrum. Sed dictum, leo at rhoncus convallis, turpis enim aliquet tellus, a hendrerit diam purus sit amet lorem. Suspendisse molestie viverra metus, vel bibendum mauris volutpat id. Ut congue leo a lacus tempor, feugiat scelerisque nunc rhoncus. Praesent auctor imperdiet mauris sit amet feugiat. Vestibulum ut justo lacinia, aliquam dui sit amet, mollis sapien.

Nam ante nulla, egestas at lobortis consectetur, interdum et est. Nunc congue fermentum lacus, sit amet bibendum dui tempus at. Duis porta lorem at diam porttitor, sit amet tempor massa pharetra. Quisque ultricies tortor sit amet blandit pulvinar. Sed vulputate diam ac enim sollicitudin ultricies. In suscipit id urna ac maximus. Phasellus in dolor scelerisque, tincidunt nisi et, fermentum diam. Mauris faucibus sem enim, quis vehicula mi ullamcorper vel. Etiam efficitur magna vel metus laoreet viverra. Nunc euismod, est vel venenatis vulputate, purus sem eleifend diam, at vulputate tellus orci aliquam nisl. Integer porta dolor non nibh eleifend consequat. Vestibulum consequat malesuada arcu non pellentesque. Sed." />
                
                <IntroInfo name="As" active={false} content="This is the As content" />
                
                <IntroInfo name="Poke" active={false} content="This is the Poke content" />

            </div>

        </div>
    );
}

//export
export default Intro