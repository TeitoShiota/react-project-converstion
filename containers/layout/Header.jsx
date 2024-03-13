import DecoratorPrimary from "@/components/DecoratorPrimary";

export default function Header() {
    return (
        <header className="light mirrored" id="hjem">
            <div className="filter-gradient header-content">
                <p className="text-uppercase">karlstrup klatrepark</p>
                <p className="text-display">Klatring for alle aldre</p>
                <p className="body-1">
                    Klatring er en fritidsbeskæftigelse som kan samle hele familien. Et
                    aktivt liv begynder i Karlstrup Klatrepark.
                </p>
                <a href="#" className="link primary"> Læs mere 
                    <DecoratorPrimary />
                </a>
            </div>
        </header>
    );
}